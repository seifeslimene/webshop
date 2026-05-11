import { db } from '..'
import Details from 'models/Details'

const getAll = async () => {
  await db.connect()
  const result = await Details.find().sort({
    createdAt: 'desc',
  })
  await db.disconnect()
  return result
}

const getById = async id => {
  await db.connect()
  const result = await Details.findOne({
    category_id: id,
  })
  // if (!result) throw 'Category specification does not exist'
  await db.disconnect()
  return result
}

const create = async params => {
  await db.connect()
  const newDetailss = new Details(params)
  await newDetailss.save()
  await db.disconnect()
}

const _delete = async id => {
  await db.connect()
  const details = await Details.findById(id)
  if (!details) throw 'Category specification does not exist'
  await Details.findByIdAndDelete(id)
  await db.disconnect()
}

const update = async (id, params) => {
  await db.connect()
  const details = await Details.findById(id)
  if (!details) throw 'Category specification does not exist'
  await Details.findByIdAndUpdate({ _id: id }, { ...params })
  await db.disconnect()
}

export const detailsRepo = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
}
