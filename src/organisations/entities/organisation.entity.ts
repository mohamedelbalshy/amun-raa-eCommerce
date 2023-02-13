import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Organisation {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
