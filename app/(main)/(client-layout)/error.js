'use client' // Error components must be Client Components

import { Button } from '@/components'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <>
      <main className="lg:px-3 container xl:mt-32">
        <div className="py-20 mx-auto space-y-3 text-center w-fit">
          <h5 className="text-xl">{error.name}</h5>
          <p className="text-lg text-red-500">
            An exception occurred. Please check whether your address is incorrect or contact the
            administrator.
          </p>
          <Button
            className="mx-auto"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => {
                console.log('Send abnormal alarm notification to OA system', error.message)
              }
            }
          >
            inform us
          </Button>
        </div>
      </main>
    </>
  )
}
