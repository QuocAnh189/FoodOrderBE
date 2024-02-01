import HTTP_STATUS from '@/constants/httpStatus';
import { HttpException } from '@/exceptions';
import { ICategory } from '@/interfaces';
import { Category } from '@/models';
import { ObjectId } from 'mongodb';
import { Service } from 'typedi';

@Service()
export class CategoryService {
  public async createCategory(data: ICategory): Promise<ICategory> {
    const { name } = data;
    const categoryExists = await Category.findOne({ name });
    if (categoryExists) {
      throw new HttpException(HTTP_STATUS.UNPROCESSABLE_ENTITY, 'category already exists');
    }

    const newCategory = await Category.create({
      name,
    });

    return newCategory;
  }

  public async getCategory(id: string): Promise<ICategory> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `Id ${id} is valid`);
    }

    const category = await Category.findById(id);
    if (!category) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, 'category is not found');
    }

    return category;
  }

  public async getCategories(): Promise<ICategory[]> {
    const categories = await Category.find();

    if (!categories) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, 'categories is not found');
    }

    return categories;
  }

  public async updateCategory(data: ICategory, id: string): Promise<ICategory> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `Id ${id} is valid`);
    }
    const category = await Category.findByIdAndUpdate(id, data, {
      new: true,
    });
    return category;
  }

  public async deleteCategory(id: string): Promise<string> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `Id ${id} is valid`);
    }

    const category = await Category.findByIdAndDelete(id);
    console.log(category);
    return 'Delete category successfully';
  }
}
