import { ObjectType } from 'type-graphql';

import { IPerson } from './person.interface';

@ObjectType({ implements: IPerson })
// eslint-disable-next-line import/prefer-default-export
export class Person implements IPerson {
  id: string;

  name: string;
}
