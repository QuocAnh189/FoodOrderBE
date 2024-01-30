import { Router } from 'express';
import { PATHS } from '@/constants';

import AuthRoute from './auth.route';
import UserRoute from './user.route';
const route = Router();

route.use(PATHS.AUTH, new AuthRoute().router);
route.use(PATHS.USER, new UserRoute().router);

export default route;
