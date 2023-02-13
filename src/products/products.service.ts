import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from 'src/prisma.service';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProductInput: CreateProductInput): Promise<Product> {
    try {
      const createdProduct = await this.prisma.product.create({
        data: createProductInput,
      });
      return createdProduct;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(`Error when creating new Product`);
    }
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
