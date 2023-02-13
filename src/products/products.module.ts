import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { PrismaService } from 'src/prisma.service';
import { DateScalar } from 'src/common/scalars/date.scalar';

@Module({
  providers: [ProductsResolver, ProductsService, PrismaService, DateScalar],
})
export class ProductsModule {}
