import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'id' })
  id: number;

  @Field(() => String, { description: 'name' })
  name: string;
}
