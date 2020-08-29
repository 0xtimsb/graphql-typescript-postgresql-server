import { Resolver, Mutation, Arg } from "type-graphql";

@Resolver()
export class UserResolver {
  @Mutation(() => Boolean)
  createUser(@Arg('name') name: string) {
    console.log(name);
    return true;
  }
}