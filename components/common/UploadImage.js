'use client'

import OSS from 'ali-oss'
import { useLazyGetUploadTokenQuery } from '@/store/services'
import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'
import { getFilenameExt } from '@/utils'

const normalizeOssPrefix = value => {
  const raw = (value || '').trim()
  if (!raw) return ''

  return raw
    .replace(/^oss:\/\/[^/]+\/?/i, '')
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')
}

const normalizeFolder = value => {
  const raw = value || '/others'
  return raw.replace(/^\/+/, '').replace(/\/+$/, '')
}

const UploadImage = props => {
  //? Props
  const { folder, handleAddUploadedImageUrl } = props

  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)

  const [getUploadToken] = useLazyGetUploadTokenQuery()

  const handleFileChange = event => {
    setFile(event.target.files?.[0] || null)
  }

  const handleUpload = async event => {
    setLoading(true)

    if (!file) {
      setError('Please select a file')
      setLoading(false)
      return
    }

    if (!file.type.startsWith('image/')) {
      setError('The selected file must be an image')
      setLoading(false)
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('The size of the image should not exceed 5 MB')
      setLoading(false)
      return
    }

    const credentials = await getUploadToken().unwrap()

    const { AccessKeyId, AccessKeySecret, SecurityToken } = credentials.data
    const ossClient = new OSS({
      accessKeyId: AccessKeyId,
      accessKeySecret: AccessKeySecret,
      stsToken: SecurityToken,
      bucket: process.env.NEXT_PUBLIC_ALI_BUCKET_NAME,
      region: process.env.NEXT_PUBLIC_ALI_REGION,
      secure: true,
    })

    const fileName = `${nanoid()}.${getFilenameExt(file.name)}`
    const keyPrefix = normalizeOssPrefix(process.env.NEXT_PUBLIC_ALI_FILES_PATH)
    const targetFolder = normalizeFolder(folder)
    const objectKey = [keyPrefix, targetFolder, fileName].filter(Boolean).join('/')

    ossClient
      .put(objectKey, file)
      .then(result => {
        handleAddUploadedImageUrl(result.url)
        setMessage('Upload successful')
      })
      .catch(err => {
        console.log(`Common upload failed`, err)
        setError(err.message || 'Image not uploaded')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <div className="flex-1 space-y-3 my-4">
        <label htmlFor="file" className="text-field__label">
          Image plugin
        </label>
        <div className="flex items-center gap-x-3">
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="border border-gray-300 px-3 py-2 w-full"
          />
          <button
            type="button"
            disabled={loading || !file}
            onClick={handleUpload}
            className="text-green-600 bg-green-50 w-36 hover:text-green-700 hover:bg-green-100 py-2 rounded"
          >
            {loading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      </div>
      {error && <p className="text-red-500 my-1">{error}</p>}
      {message && <p className="text-green-500 my-1">{message}</p>}
    </>
  )
}

export default UploadImage
