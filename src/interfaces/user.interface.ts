import { ObjectId } from 'mongodb';
import { ERole } from './auth.interface';

export interface IUserInfo {
  userId: ObjectId;
  streetAddress: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  role: ERole;
}

export interface IUser {
  _id?: ObjectId;
  email: string;
  name: string;
  avatar: string;
  password: string;
  info: ObjectId;
  isActive: boolean;
  refreshToken?: string;
}
