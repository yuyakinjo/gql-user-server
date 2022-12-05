import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInput {
  @Field(() => String, { description: 'name' })
  name: string;
}
