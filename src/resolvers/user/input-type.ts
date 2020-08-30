import { Field, InputType } from 'type-graphql';
import { Length, IsEmail } from 'class-validator';

@InputType()
export class UserInput {
  @Field()
  @Length(1, 255)
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @Length(4, 255)
  username: string;

  @Field()
  password: string;
}