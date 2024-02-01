import { ObjectId } from 'mongodb';

export interface IOrder {
  _id?: ObjectId;
  userId: ObjectId;
  userEmail: string;
  phone: string;
  streetAddress: string;
  postalCode: string;
  city: string;
  country: string;
  cartProducts: any;
  paid: boolean;
}
