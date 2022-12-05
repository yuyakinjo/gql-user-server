import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './create.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int, { description: 'id' })
  id: number;

  @Field(() => String, { description: 'name' })
  name: string;
}
