import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String, { nullable: false, description: 'Product name' })
  name: string;

  @Field(() => String, { nullable: false, description: 'Product Description' })
  description: string;

  @Field(() => Int, { nullable: false })
  quantity: number;

  @Field(() => String, {
    nullable: false,
    defaultValue: 'USD',
    description: 'Product Price Currency',
  })
  currency: string;

  @Field(() => Float, { description: 'Product Price' })
  price: number;

  @Field(() => Boolean, { description: 'Product published?' })
  published: boolean;

  @Field(() => Int, { description: 'Product Category Id' })
  productCategoryId: number;

  @Field(() => Int, { description: 'Product Category Id' })
  organisationId: number;

  @Field(() => String, { nullable: true })
  sku?: string;

  @Field(() => String, { nullable: true })
  shortDescription?: string;

  @Field(() => String, { nullable: true })
  manufacturer?: string;

  @Field(() => String, { nullable: true })
  countryOfManufacturing?: string;

  @Field(() => String, { nullable: true })
  color?: string;

  @Field(() => [String], { nullable: true })
  images?: string[];

  @Field(() => [String], { nullable: true })
  videos?: string[];
}
