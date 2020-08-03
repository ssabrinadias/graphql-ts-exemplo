import { InputType, Field } from 'type-graphql';
import { Length, IsEmail } from 'class-validator';
import { User } from '../../entities/User';

@InputType()
export default class UserInput implements Partial<User> {
  @Field()
    @Length(1, 255)
    username!: string;

  @Field()
    @IsEmail()
    email!: string;

  @Field()
    address!: string;

  @Field()
    @Length(1, 255)
    phone!: string;
}
