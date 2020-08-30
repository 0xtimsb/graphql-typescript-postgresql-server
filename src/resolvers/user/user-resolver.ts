import { Resolver, Mutation, Arg, Query } from "type-graphql";
import bcrypt from 'bcryptjs';

import { User } from "../../entity/user";
import { UserInput } from './input-type';

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    const users = await User.find();
    return users;
  }

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