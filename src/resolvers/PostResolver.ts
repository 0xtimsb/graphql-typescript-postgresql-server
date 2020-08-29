import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import { Post } from '../entity/Post';

@Resolver()
export class PostResolver {
  @Mutation(() => Boolean)
  async createPost(@Arg('title') title: string) {
    await Post.insert({ title });
    return true;
  }

  @Query(() => [Post])
  posts() {
    return Post.find();
  }
}