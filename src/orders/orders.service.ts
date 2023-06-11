import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './orders.model';
import { FindAllArgs } from './dto/find-all.args';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order)
    private orderModel: typeof Order
  ) { }

  create(data: CreateOrderInput) {
    return this.orderModel.create(data as any)
  }

  findAll(args: FindAllArgs) {
    return this.orderModel.findAll({ 
      limit: args.limit, 
      offset: args.offset 
    });
  }

  findOne(id: number): Promise<Order> {
    return this.orderModel.findOne({
      where: {
        id,
      }
    });
  }

  update(id: number, updateOrderInput: UpdateOrderInput) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
