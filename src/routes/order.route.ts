import { OrderController } from '@/controllers/order.controllers';
import { IRoutes } from '@/interfaces';
import { wrapRequestHandler } from '@/utils/handles';
import { Router } from 'express';

class OrderRoute implements IRoutes {
  public router = Router();
  public order = new OrderController();

  constructor() {
    this.initializeIRoutes();
  }

  private initializeIRoutes() {
    /**
     * @openapi
     * '/order/:id':
     *  get:
     *     tags:
     *     - Order
     *     summary: Get order by Id
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
    this.router.get('/:id', wrapRequestHandler(this.order.getOrder));

    /**
     * @openapi
     * '/order/user/:id':
     *  get:
     *     tags:
     *     - Order
     *     summary: Get order
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
    this.router.get('/user/:id', wrapRequestHandler(this.order.getOrders));

    /**
     * @openapi
     * '/order/:id':
     *  post:
     *     tags:
     *     - Order
     *     summary: Create Order
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
    this.router.post('/', wrapRequestHandler(this.order.createOrder));

    /**
     * @openapi
     * '/order/:id':
     *  patch:
     *     tags:
     *     - Order
     *     summary: Update order
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
    this.router.patch('/:id', wrapRequestHandler(this.order.updateOrder));

    /**
     * @openapi
     * '/order/:id':
     *  delete:
     *     tags:
     *     - Order
     *     summary: Delete Order
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
    this.router.delete('/:id', wrapRequestHandler(this.order.deleteOrder));
  }
}

export default OrderRoute;
