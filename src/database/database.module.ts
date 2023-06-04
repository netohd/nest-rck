import { Module } from '@nestjs/common';
import { Database } from './database.providers';

@Module({
  providers: [Database]
})
export class DatabaseModule {}
