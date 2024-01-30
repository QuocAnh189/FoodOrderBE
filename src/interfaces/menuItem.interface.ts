import { ObjectId } from 'mongodb';

export interface IExtraPrice {
  name: string;
  price: number;
}

export interface IMenuItem {
  image: string;
  name: string;
  description: string;
  category: ObjectId;
  basePrice: number;
  sizes: [IExtraPrice];
  extraIngredientPrices: [IExtraPrice];
}
