'use client'

import { useEffect, useState } from 'react'

import { useEditUserMutation } from '@/store/services'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { addressSchema } from 'utils'

import { useUserInfo } from 'hooks'

import { getByCode_Gouvernorat, gouvernorats, municipalities } from 'utils/gouver-munic'

import {
  TextField,
  DisplayError,
  SubmitModalBtn,
  Combobox,
  Modal,
  HandleResponse,
} from 'components'

const AddressModal = props => {
  //? Porps
  const { isShow, onClose, address } = props

  //? Get User Data
  const { userInfo } = useUserInfo()

  //? State
  const [munic, setMunic] = useState([])

  //? Form Hook
  const {
    handleSubmit,
    control,
    formState: { errors: formErrors },
    setValue,
    getValues,
    watch,
  } = useForm({
    resolver: yupResolver(addressSchema),
    defaultValues: address,
  })

  //? Edit User-Info Query
  const [editUser, { data, isSuccess, isLoading, isError, error }] = useEditUserMutation()

  useEffect(() => {
    setValue('municipality', {})
    const refreshedMunicipalities = getByCode_Gouvernorat(getValues('gouvernorat')?.code).map(
      munic => ({
        code: munic.Code_Municipalite,
        name: munic.Nom_Municipalite_Ar,
      })
    )
    setMunic(refreshedMunicipalities)
    watch('gouvernorat')
  }, [getValues('gouvernorat')?.code])

  // useEffect(() => {
  //   if (userInfo?.address) {
  //     setValue('gouvernorat', userInfo.address.gouvernorat)
  //     setValue('municipality', userInfo.address.municipality)
  //   }
  // }, [])

  //? Handlers
  const submitHander = address => {
    // debugger
    editUser({
      body: { address },
    })
  }

  //? Render(s)
  return (
    <>
      {/* Handle Edit Address Response */}
      {(isSuccess || isError) && (
        <HandleResponse
          isError={isError}
          isSuccess={isSuccess}
          error={error?.data?.message}
          message={data?.message}
          onSuccess={onClose}
        />
      )}

      <Modal isShow={isShow} onClose={onClose} effect="bottom-to-top">
        <Modal.Content
          onClose={onClose}
          className="flex flex-col h-full px-5 py-3 bg-white md:rounded-lg gap-y-5 "
        >
          <Modal.Header onClose={onClose}>Address Management</Modal.Header>
          <Modal.Body>
            <p>Please enter your shipping address</p>
            <form
              className="flex flex-col justify-between flex-1 pl-4 overflow-y-auto"
              onSubmit={handleSubmit(submitHander)}
            >
              <div className="space-y-12 md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-5 md:items-baseline">
                <div className="space-y-2">
                  <Combobox
                    control={control}
                    name="gouvernorat"
                    list={gouvernorats}
                    placeholder="Please select your gouvernorat"
                  />
                  <DisplayError errors={formErrors.gouvernorat?.name} />
                </div>

                <div className="space-y-2">
                  <Combobox
                    control={control}
                    name="municipality"
                    list={munic}
                    placeholder="Please select your Municipality"
                  />
                  <DisplayError errors={formErrors.municipality?.name} />
                </div>

                <TextField
                  label="street information"
                  control={control}
                  errors={formErrors.street}
                  name="street"
                />

                <TextField
                  label="Postcode"
                  control={control}
                  errors={formErrors.postalCode}
                  name="postalCode"
                  type="number"
                  direction="ltr"
                  inputMode="numeric"
                />
              </div>

              <div className="py-3 border-t-2 border-gray-200 lg:pb-0 flex">
                <SubmitModalBtn isLoading={isLoading} className="ml-auto">
                  Sure
                </SubmitModalBtn>
              </div>
            </form>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default AddressModal
