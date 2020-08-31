import { Resolver, Mutation, Arg, Query } from "type-graphql";
import bcrypt from 'bcryptjs';

import { User } from "../../entity/user";
import { UserInput } from '../../input/user/user-input';

import { sendEmail } from "../../utils/send-email";
import { createConfirmationUrl } from '../../utils/create-confirmation-url';

@Resolver()
export class SignUpResolver {
  @Query(() => String)
  async hello() {
    return 'Hello world!';
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

    await sendEmail(email, await createConfirmationUrl(user.id));

    return user;
  }
}