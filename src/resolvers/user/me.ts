import { Resolver, Query, Ctx } from "type-graphql";

import { User } from "../../entity/user";
import { context } from '../../types/context';

@Resolver()
export class MeResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: context): Promise<User | undefined> {
    if (!ctx.req.session!.userId) {
      return undefined;
    }
    return User.findOne(ctx.req.session!.userId);
  }
}