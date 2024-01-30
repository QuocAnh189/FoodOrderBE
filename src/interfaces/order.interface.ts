import { ObjectId } from 'mongodb';

export interface IOrder {
  userEmail: string;
  phone: string;
  streetAddress: string;
  postalCode: string;
  city: string;
  country: string;
  cartProducts: ObjectId;
  paid: boolean;
}
