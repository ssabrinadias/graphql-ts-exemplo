/* eslint-disable no-console */
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType({ description: 'The Planet model' })
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

// tslint:disable-next-line: one-variable-per-declaration
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const UserService = (id: number) => ({
  id: 110,
  name: 'Kelley, Hasad Z.',
  email: 'dapibus@Nuncmauris.ca',
  address: 'P.O. Box 858, 8605 Neque Rd.',
  phone: '16590117 2824',
});
