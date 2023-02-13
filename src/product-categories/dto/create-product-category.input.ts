import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductCategoryInput {
  @Field(() => String, { description: 'Product Category name' })
  name: string;
}
