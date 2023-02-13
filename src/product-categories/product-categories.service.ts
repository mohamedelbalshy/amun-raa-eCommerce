import { Injectable } from '@nestjs/common';
import { CreateProductCategoryInput } from './dto/create-product-category.input';
import { UpdateProductCategoryInput } from './dto/update-product-category.input';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProductCategoriesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProductCategoryInput: CreateProductCategoryInput) {
    try {
      const productCategory = await this.prisma.productCategory.create({
        data: createProductCategoryInput,
        include: {
          products: true,
        },
      });

      return productCategory;
    } catch (error) {
      console.error(error);
    }
  }

  async findAll() {
    try {
      const productCategories = await this.prisma.productCategory.findMany({
        include: {
          products: true,
        },
      });

      return productCategories;
    } catch (error) {
      console.error(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} productCategory`;
  }

  update(id: number, updateProductCategoryInput: UpdateProductCategoryInput) {
    return `This action updates a #${id} productCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} productCategory`;
  }
}
