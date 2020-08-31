import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import bcrypt from 'bcryptjs';

import { redis } from "../../redis";
import { User } from "../../entity/user";
import { ChangePasswordInput } from "./change-password-input";
import { context } from "../../types/context";

@Resolver()
export class ChangePasswordResolver {
  @Mutation(() => User, { nullable: true })
  async changePassword(
    @Arg('data') { token, password }: ChangePasswordInput,
    @Ctx() ctx: context
  ): Promise<User | null> {
    const userId = await redis.get(token);

    if (!userId) {
      return null;
    }

    const user = await User.findOne(userId);

    if (!user) {
      return null;
    }

    await redis.del(token);

    user.password = await bcrypt.hash(password, 8);

    await user.save();

    ctx.req.session!.userId = user.id;

    return user;
  }
}