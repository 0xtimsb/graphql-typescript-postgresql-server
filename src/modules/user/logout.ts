import { Resolver, Ctx, Mutation } from "type-graphql";
import { context } from "../../types/context";

@Resolver()
export class LogoutResolver {
  @Mutation(() => Boolean)
  async logout(
    @Ctx() ctx: context
  ): Promise<Boolean> {
    return new Promise((res, rej) =>
      ctx.req.session!.destroy((err) => {
        if (err) {
          console.log(err);
          return rej(false);
        }
        ctx.res.clearCookie('cookie');
        res(true);
      })
    );
  }
}