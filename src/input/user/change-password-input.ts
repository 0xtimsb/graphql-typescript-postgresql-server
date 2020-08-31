import { Field, InputType } from 'type-graphql';
import { PasswordInput } from '../../shared/password-input';
import { Min } from 'class-validator';

@InputType()
export class ChangePasswordInput extends PasswordInput {
  @Field()
  @Min(8)
  token: string;
}