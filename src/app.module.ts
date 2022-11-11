import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComprasModule } from './compras/compras.module';
import { ItemsModule } from './items/items.module';
import { Item } from './items/entities/item.entity';
import { Compra } from './compras/entities/compra.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'mydb',
      synchronize: true,
      entities: [Item, Compra],
      logging: 'all'
    }),
    ComprasModule,
    ItemsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
