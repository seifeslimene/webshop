import { db } from '..'
import Category from 'models/Category'
import Product from 'models/Product'

const getAll = async (query = {}, filter = {}, sort = {}) => {
  await db.connect()
  const result = await Category.find(filter)
    .lean()
    .sort({
      createdAt: 'desc',
    })
    .exec()
  await db.disconnect()
  return result
}

const getOne = async filter => {
  try {
    await db.connect()
    const result = await Category.findOne(filter).lean().exec()
    await db.disconnect()
    return result
  } catch (error) {
    console.log('error', error)
    throw 'No such dataCategory'
  }
}

const create = async params => {
  await db.connect()
  const category = await Category.findOne({ name: params.name })
  if (category) throw 'The category name already exists'
  const newCategory = new Category(params)
  await newCategory.save()
  await db.disconnect()
}

const _delete = async id => {
  await db.connect()
  const product = await Product.findOne({ category: id })
  if (product) throw 'Please delete all products related to this group'

  const category = await Category.findById(id)
  if (!category) throw 'Category does not exist'
  await Category.findByIdAndDelete(id)
  await db.disconnect()
}

const update = async (id, params) => {
  await db.connect()
  const category = await Category.findById(id)
  if (!category) throw 'Category does not exist'
  await Category.findByIdAndUpdate({ _id: id }, params)
  await db.disconnect()
}

export const categoryRepo = {
  getAll,
  getOne,
  create,
  update,
  delete: _delete,
}
