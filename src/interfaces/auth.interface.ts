import { Request } from 'express';
import { IUser } from './user.interface';

export enum ERole {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER',
  SHIPPER = 'SHIPPER',
}

export enum ETokenType {
  REFRESH = 'REFRESH',
  ACCESS = 'ACCESS',
}

export interface DataStoredInToken {
  id: string;
  role?: ERole;
  type: ETokenType;
}

export interface TokenData {
  token: string;
  expiresIn: number | string;
}

export interface TokenPayload {
  accessToken: string;
  refreshToken: string;
}

export interface RequestWithUser extends Request {
  user: IUser;
}
