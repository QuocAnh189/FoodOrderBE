import { Schema, model } from 'mongoose';
import { ERole, IUser, IUserInfo } from '../interfaces';
import { SCHEMA } from './schema-name';

const userInfoSchema = new Schema<IUserInfo>(
  {
    userId: { type: Schema.ObjectId, required: true },
    streetAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
    phone: { type: String },
    role: { type: String, default: ERole.CUSTOMER },
  },
  { timestamps: true },
);
export const UserInfo = model<IUserInfo>(SCHEMA.USERINFO, userInfoSchema);

const userSchema = new Schema<IUser>(
  {
    name: { type: String },
    email: { type: String },
    avatar: { type: String },
    password: { type: String },
    info: { type: Schema.ObjectId, ref: SCHEMA.USERINFO },
    isActive: { type: Boolean, default: true },
    refreshToken: { type: String },
  },
  { timestamps: true },
);

export const User = model<IUser>(SCHEMA.USER, userSchema);
