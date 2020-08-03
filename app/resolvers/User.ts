/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Resolver, Arg, Query } from 'type-graphql';
import { User, UserModel } from '../entities/User';

@Resolver(() => User)
export default class UserResolver {
  service = UserModel;

  @Query(() => User, { nullable: false })
  async userbyId(@Arg('id') id: number) {
    const res = await this.service.getUser(id);
    return res;
  }

  @Query(() => [User], { nullable: false })
  async allUser() {
    const res = await this.service.getAllUser();
    return res;
  }
}
