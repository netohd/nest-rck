import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './orders.model';

@Module({
  imports: [SequelizeModule.forFeature([Order])],
  providers: [OrdersResolver, OrdersService]
})
export class OrdersModule {}
