import { ObjectType, Field, ID } from 'type-graphql';
import UserService from '../src/service/user.service';

@ObjectType({ description: 'The User model' })
export class User {
    @Field(() => ID)
    id!: number;

    @Field()
    name!: string;

    @Field()
    email!: string;

    @Field()
    address!: string;

    @Field()
    phone!: string;
}

export const UserModel = UserService;
