import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SignupInput {
  @Field(() => String, { description: 'Email' })
  email: string;

  @Field(() => String, { description: 'Password' })
  password: string;
}
