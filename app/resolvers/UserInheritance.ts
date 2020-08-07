import {
  Resolver, Query,
} from 'type-graphql';

import { IPerson } from '../entities/person/person.interface';
import { JuridicalPerson } from '../entities/juridicalPerson/juridicalPerson.type';

@Resolver()
export default class UserInheritance {
  private readonly personsRegistry: IPerson[] = [];

  @Query((returns) => [IPerson])
  persons(): IPerson[] {
    // this one returns interfaces
    // so GraphQL has to be able to resolve type of the item
    return this.personsRegistry;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Query(() => [JuridicalPerson], { nullable: false })
  // eslint-disable-next-line class-methods-use-this
  Juridical() {
    return ([{
      id: '1', name: 'SABRINA', age: '1', companyName: 'teste',
    }]);
  }
}
