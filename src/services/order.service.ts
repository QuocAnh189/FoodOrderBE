import HTTP_STATUS from '@/constants/httpStatus';
import { HttpException } from '@/exceptions';
import { IOrder } from '@/interfaces';
import { Order } from '@/models';
import { ObjectId } from 'mongodb';
import { Service } from 'typedi';

@Service()
export class OrderService {
  public async createOrder(data: IOrder): Promise<IOrder> {
    // const OrderExists = await Order.findOne({ name });
    // if (OrderExists) {
    //   throw new HttpException(HTTP_STATUS.UNPROCESSABLE_ENTITY, 'Order already exists');
    // }
    const newOrder = await Order.create(data);

    return newOrder;
  }

  public async getOrder(id: string): Promise<IOrder> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `Id ${id} is valid`);
    }

    const order = await Order.findById(id);
    if (!Order) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, 'Order is not found');
    }

    return order;
  }

  public async getOrders(id: string): Promise<IOrder[]> {
    const orders = await Order.find({ userId: id });

    if (!orders) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, 'Orders is not found');
    }

    return orders;
  }

  public async updateOrder(data: IOrder, id: string): Promise<IOrder> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `Id ${id} is valid`);
    }
    const order = await Order.findByIdAndUpdate(id, data, {
      new: true,
    });
    return order;
  }

  public async deleteOrder(id: string): Promise<string> {
    if (!ObjectId.isValid(id)) {
      throw new HttpException(HTTP_STATUS.NOT_FOUND, `Id ${id} is valid`);
    }

    const order = await Order.findByIdAndDelete(id);
    return 'Delete Order successfully';
  }
}
