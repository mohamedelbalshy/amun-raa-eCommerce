import { Module } from '@nestjs/common';
import { ProductCategoriesService } from './product-categories.service';
import { ProductCategoriesResolver } from './product-categories.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [
    ProductCategoriesResolver,
    ProductCategoriesService,
    PrismaService,
  ],
})
export class ProductCategoriesModule {}
