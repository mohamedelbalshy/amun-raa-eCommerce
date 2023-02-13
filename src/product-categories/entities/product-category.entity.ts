import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/products/entities/product.entity';

@ObjectType()
export class ProductCategory {
  @Field(() => Int, { description: 'Product Category Id' })
  id: number;

  @Field(() => String, { description: 'Product Category name' })
  name: string;

  @Field(() => [Product], { description: 'Products' })
  products: Product[];
}
