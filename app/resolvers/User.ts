/* eslint-disable class-methods-use-this */
import { Resolver, Arg, Query } from 'type-graphql';
import { User, UserService } from '../entities/User';
// import UserInput from './types/User-input'

@Resolver(() => User)
export default class UserResolver {
  @Query(() => User, { nullable: false })
  returnSingleUser(@Arg('id') id: number): {
    id: number,
    name: string,
    email: string,
    address: string,
    phone: string,
  } {
    return UserService(id);
  }
}
