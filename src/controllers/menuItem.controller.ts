import HTTP_STATUS from '@/constants/httpStatus';
import { MenuItemService } from '@/services';
import Container from 'typedi';
import { Request, Response, NextFunction } from 'express';

export class MenuItemController {
  public menuItem = Container.get(MenuItemService);

  public getMenuItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const menuItem = await this.menuItem.getMenuItem(id);

      res.status(HTTP_STATUS.OK).json(menuItem);
    } catch (error) {
      next(error);
    }
  };

  public getMenuItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const menuItems = await this.menuItem.getMenuItems();

      res.status(HTTP_STATUS.OK).json(menuItems);
    } catch (error) {
      next(error);
    }
  };

  public createMenuItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const menuItem = await this.menuItem.createMenuItem(data);

      res.status(HTTP_STATUS.OK).json(menuItem);
    } catch (error) {
      next(error);
    }
  };

  public updateMenuItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;

      const menuItem = await this.menuItem.updateMenuItem(data, id);

      res.status(HTTP_STATUS.OK).json(menuItem);
    } catch (error) {
      next(error);
    }
  };

  public deleteMenuItem = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.params);
    try {
      const { id } = req.params;

      const result = await this.menuItem.deleteMenuItem(id);

      res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };

  public deleteImage = async (req: Request, res: Response, next: NextFunction) => {
    const { public_id } = req.body;
    try {
      const { result } = await this.menuItem.deleteImage(public_id);
      res.status(HTTP_STATUS.OK).json({ message: result });
    } catch (error) {
      next(error);
    }
  };
}
