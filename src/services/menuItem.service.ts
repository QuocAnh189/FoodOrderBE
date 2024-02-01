import HTTP_STATUS from '@/constants/httpStatus';
import { HttpException } from '@/exceptions';
import { IMenuItem } from '@/interfaces';
import { MenuItem } from '@/models';
import { ObjectId } from 'mongodb';
import { Service } from 'typedi';
import cloudinary from '@/configs/configImg';

@Service()
export class MenuItemService {
  public async getMenuItem(id: string): Promise<IMenuItem> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `Id ${id} is valid`);
    }

    const menuItem = await MenuItem.findById(id);
    if (!menuItem) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `Menu item with id ${id} not found`);
    }

    return menuItem;
  }

  public async getMenuItems(): Promise<IMenuItem[]> {
    const menuItems = await MenuItem.find();

    if (!menuItems) {
      throw new HttpException(HTTP_STATUS.UNPROCESSABLE_ENTITY, 'Menu items not found');
    }

    return menuItems;
  }

  public async createMenuItem(data: IMenuItem): Promise<IMenuItem> {
    const menuItemExists = await MenuItem.findOne({ name: data.name });

    if (menuItemExists) {
      throw new HttpException(HTTP_STATUS.UNPROCESSABLE_ENTITY, 'category already exists');
    }

    const newMenuItem = await MenuItem.create(data);
    return newMenuItem;
  }

  public async updateMenuItem(data: IMenuItem, id: string): Promise<IMenuItem> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `Id ${id} is valid`);
    }
    const menuItem = await MenuItem.findByIdAndUpdate(id, data, {
      new: true,
    });
    return menuItem;
  }

  public async deleteMenuItem(id: string): Promise<IMenuItem> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `Id ${id} is valid`);
    }
    const menuItem = await MenuItem.findByIdAndDelete(id);

    return menuItem;
  }

  public async deleteImage(id: string): Promise<any> {
    const res = await cloudinary.uploader.destroy(id);
    if (!res) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `No public_id with id: ${id}`);
    }
    return res;
  }
}
