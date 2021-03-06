import { Field, ObjectType } from 'type-graphql';
import { Person } from '../person/person.type';

@ObjectType()
// eslint-disable-next-line import/prefer-default-export
export class NaturalPerson extends Person {
  @Field()
  cpf: string;
}
