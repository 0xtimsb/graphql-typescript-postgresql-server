import { Resolver, Mutation, Arg } from "type-graphql";
import bcrypt from 'bcryptjs';

import { User } from "../../entity/user";
import { UserInput } from './input-type';

@Resolver()
export class SignUpResolver {
  @Mutation(() => User)
  async createUser(
    @Arg('data') { name, username, email, password }: UserInput
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = await User.create({
      name,
      email,
      username,
      password: hashedPassword
    }).save();
    return user;
  }
}