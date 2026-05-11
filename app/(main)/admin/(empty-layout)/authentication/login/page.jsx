'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { LoginForm, LogoH } from '@/components'

import { useLoginMutation } from '@/store/services'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { userLogin, showAlert } from '@/store'
import { useTitle } from '@/hooks'

export default function LoginPage() {
  useTitle('Administrator login')
  //? Assets
  const dispatch = useDispatch()
  const { push } = useRouter()

  //? Login User
  const [login, { data, isSuccess, isError, isLoading, error }] = useLoginMutation()

  //? Handlers
  const submitHander = async ({ email, password }) => {
    if (email && password) {
      await login({
        body: { email, password },
      })
    }
  }

  //? Handle Login User Response
  useEffect(() => {
    if (isSuccess) {
      if (data?.data?.user.root || data?.data?.user.role === 'admin') {
        dispatch(userLogin(data?.data.token))

        dispatch(
          showAlert({
            status: 'success',
            title: data.message,
          })
        )
        push('/admin')
      } else {
        dispatch(
          showAlert({
            status: 'error',
            title: 'You do not have permission to access the admin panel',
          })
        )
      }
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError && error)
      dispatch(
        showAlert({
          status: 'error',
          title: error?.data?.message,
        })
      )
  }, [isError])

  return (
    <>
      <main className="grid items-center min-h-screen bg-gray-50">
        <section className="container max-w-md px-12 py-6 space-y-6 bg-white border border-gray-100 rounded-lg shadow">
          <Link passHref href="/">
            <LogoH className="mx-auto w-40 h-14" />
          </Link>
          <h1>
            <font className="">
              <font>Login</font>
            </font>
          </h1>
          <LoginForm isLoading={isLoading} onSubmit={submitHander} />
        </section>

        <div className="fixed max-w-xs px-2 py-3 bg-white border rounded-lg shadow-lg top-5 right-5">
          <h5 className="mb-2 text-amber-600">
            You can view the admin dashboard using the email address and password below.
          </h5>
          <div className="text-left">
            <span className="text-sm text-zinc-500">Email: admin@gmail.com</span>
            <br />
            <span className="text-sm text-zinc-500">Password: 123456</span>
          </div>
        </div>
      </main>
    </>
  )
}
