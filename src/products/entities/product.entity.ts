import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType({ description: 'product' })
export class Product {
  @Field(() => ID, { description: 'Product Id' })
  id: number;

  @Field(() => String, { description: 'Product name' })
  name: string;
}
