import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { SequelizeModule } from '@nestjs/sequelize'
import * as dotenv from 'dotenv'
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
dotenv.config()

@Module({
  imports: [
    OrdersModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      schema: 'oms',
      autoLoadModels: true,
      synchronize: true,
      define: {
        timestamps: false,
        freezeTableName: true
      }
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      debug: true,
      playground: true,
      driver: ApolloDriver
    }),
  ],
})
export class AppModule { }
