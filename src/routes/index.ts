import { Router } from 'express';
import { PATHS } from '@/constants';

import AuthRoute from './auth.route';
import UserRoute from './user.route';
import CategoryRoute from './category.route';
import MenuItemRoute from './menuItem.route';
const route = Router();

route.use(PATHS.AUTH, new AuthRoute().router);
route.use(PATHS.USER, new UserRoute().router);
route.use(PATHS.CATEGORY, new CategoryRoute().router);
route.use(PATHS.MENUITEM, new MenuItemRoute().router);

export default route;
