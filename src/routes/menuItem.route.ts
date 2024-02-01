import { MenuItemController } from '@/controllers';
import { IRoutes } from '@/interfaces';
import { wrapRequestHandler } from '@/utils/handles';
import { Router } from 'express';

class MenuItemRoute implements IRoutes {
  public router = Router();
  public menuItem = new MenuItemController();

  constructor() {
    this.initializeIRoutes();
  }
  private initializeIRoutes() {
    /**
     * @openapi
     * '/menuitem/:id':
     *  get:
     *     tags:
     *     - MenuItem
     *     summary: Get menuItem by Id
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
    this.router.get('/:id', wrapRequestHandler(this.menuItem.getMenuItem));

    /**
     * @openapi
     * '/menuitem':
     *  get:
     *     tags:
     *     - MenuItem
     *     summary: Get menuItems
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
    this.router.get('/', wrapRequestHandler(this.menuItem.getMenuItems));

    /**
     * @openapi
     * '/menuitem':
     *  get:
     *     tags:
     *     - MenuItem
     *     summary: Create menuItems
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
    this.router.post('/', wrapRequestHandler(this.menuItem.createMenuItem));

    this.router.patch('/deleteImage', wrapRequestHandler(this.menuItem.deleteImage));

    /**
     * @openapi
     * '/menuitem/:id':
     *  get:
     *     tags:
     *     - MenuItem
     *     summary: Update menuItem
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
    this.router.patch('/:id', wrapRequestHandler(this.menuItem.updateMenuItem));

    /**
     * @openapi
     * '/menuitem/:id':
     *  get:
     *     tags:
     *     - MenuItem
     *     summary: Delete menuItem
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
    this.router.delete('/:id', wrapRequestHandler(this.menuItem.deleteMenuItem));
  }
}

export default MenuItemRoute;
