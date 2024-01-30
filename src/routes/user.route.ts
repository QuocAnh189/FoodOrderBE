import { Router } from 'express';
import { IRoutes } from '@/interfaces';
import { UserController } from '@/controllers';
import { wrapRequestHandler } from '@/utils/handles';

class UserRoute implements IRoutes {
  public router = Router();
  public user = new UserController();

  constructor() {
    this.initializeIRoutes();
  }

  private initializeIRoutes() {
    /**
     * @openapi
     * '/user/:id':
     *  get:
     *     tags:
     *     - User
     *     summary: Get user by Id
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *              $ref: '#/components/schemas/SignUpUserDto'
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      400:
     *        description: Bad request
     *      500:
     *        description: Internal server error
     *
     */
    this.router.get('/:id', wrapRequestHandler(this.user.getUser));

    /**
     * @openapi
     * '/user':
     *  get:
     *     tags:
     *     - User
     *     summary: Get users
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *              $ref: '#/components/schemas/SignUpUserDto'
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      400:
     *        description: Bad request
     *      500:
     *        description: Internal server error
     *
     */
    this.router.get('/', wrapRequestHandler(this.user.getUsers));

    /**
     * @openapi
     * '/user':
     *  get:
     *     tags:
     *     - User
     *     summary: Delete Avatar
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *              $ref: '#/components/schemas/SignUpUserDto'
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      400:
     *        description: Bad request
     *      500:
     *        description: Internal server error
     *
     */
    this.router.patch('/deleteImage', wrapRequestHandler(this.user.deleteAvatar));

    /**
     * @openapi
     * '/user':
     *  patch:
     *     tags:
     *     - User
     *     summary: Update users
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *              $ref: '#/components/schemas/SignUpUserDto'
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      400:
     *        description: Bad request
     *      500:
     *        description: Internal server error
     *
     */
    this.router.patch('/:id', wrapRequestHandler(this.user.updateUser));

    /**
     * @openapi
     * '/user':
     *  patch:
     *     tags:
     *     - User
     *     summary: Update userInfo
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *              $ref: '#/components/schemas/SignUpUserDto'
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      400:
     *        description: Bad request
     *      500:
     *        description: Internal server error
     *
     */
    this.router.patch('/info/:id', wrapRequestHandler(this.user.updateUserInfo));
  }
}

export default UserRoute;
