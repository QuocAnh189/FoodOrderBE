import { Schema, model } from 'mongoose';
import { ICategory } from '../interfaces';
import { SCHEMA } from './schema-name';

const categorySchema = new Schema<ICategory>({ name: { type: String, required: true } }, { timestamps: true });

export const Category = model<ICategory>(SCHEMA.CATEGORY, categorySchema);
