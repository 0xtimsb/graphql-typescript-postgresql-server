import { Field, InputType } from 'type-graphql';
import { Length, IsEmail } from 'class-validator';
import { PasswordInput } from '../../shared/password-input';

@InputType()
export class UserInput extends PasswordInput {
  @Field()
  @Length(1, 255)
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @Length(4, 255)
  username: string;
}