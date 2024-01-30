import { Schema, model } from 'mongoose';
import { IMenuItem } from '../interfaces';
import { SCHEMA } from './schema-name';

const ExtraPriceSchema = new Schema({
  name: String,
  price: Number,
});

const menuItemSchema = new Schema<IMenuItem>(
  {
    image: { type: String },
    name: { type: String },
    description: { type: String },
    category: { type: Schema.ObjectId, ref: SCHEMA.CATEGORY },
    basePrice: { type: Number },
    sizes: { type: [ExtraPriceSchema] },
    extraIngredientPrices: { type: [ExtraPriceSchema] },
  },
  { timestamps: true },
);

export const MenuItem = model<IMenuItem>(SCHEMA.MENUITEM, menuItemSchema);
