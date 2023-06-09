import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from './orders.model';
import { CreateOrderInput } from './dto/create-order.input';

@Resolver()
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  // @Mutation('createOrder')
  // create(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
  //   return this.ordersService.create(createOrderInput);
  // }

  // @Query(() => [Order])
  // findAll(): Promise<Order[]> {
  //   return this.ordersService.findAll();
  // }

  @Query(() => CreateOrderInput)
  findOne(@Args('id') id: number) {
    // return this.ordersService.findOne(id)
    return this.ordersService.findOne(id)
  }

  // @Mutation('updateOrder')
  // update(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
  //   return this.ordersService.update(updateOrderInput.id, updateOrderInput);
  // }

  // @Mutation('removeOrder')
  // remove(@Args('id') id: number) {
  //   return this.ordersService.remove(id);
  // }
}
