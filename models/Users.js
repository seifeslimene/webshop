import mongoose from 'mongoose'
import basePlugin from './base_model'

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
    root: { type: Boolean, default: false },
    address: {
      type: {
        postalCode: {
          type: String,
        },
        street: {
          type: String,
        },
        municipality: {
          code: {
            type: String,
          },
          name: {
            type: String,
          },
        },
        gouvernorat: {
          code: {
            type: String,
          },
          name: {
            type: String,
          },
        },
      },
      required: false,
    },
    mobile: { type: String },
  },
  { timestamps: true }
)

UserSchema.plugin(basePlugin)
const User = mongoose.models.user || mongoose.model('user', UserSchema)

export default User
