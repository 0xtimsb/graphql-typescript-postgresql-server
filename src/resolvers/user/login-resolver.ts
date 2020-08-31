import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import bcrypt from 'bcryptjs';

import { User } from "../../entity/user";
import { context } from '../../types/context';

@Resolver()
export class LoginResolver {
  @Mutation(() => User, { nullable: true })
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() ctx: context
  ): Promise<User | null> {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return null;
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return null;
    }

    ctx.req.session!.userId = user.id;

    return user;
  }
}