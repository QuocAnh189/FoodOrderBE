import { Schema, model } from 'mongoose';
import { IOrder } from '../interfaces';
import { SCHEMA } from './schema-name';

const orderSchema = new Schema<IOrder>(
  {
    userEmail: { type: String },
    phone: { type: String },
    streetAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
    cartProducts: { type: Schema.ObjectId },
    paid: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Order = model<IOrder>(SCHEMA.ORDER, orderSchema);
