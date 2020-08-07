import { InputType, Field } from 'type-graphql';
import { PersonInput } from '../person/person.input';

@InputType()
// eslint-disable-next-line import/prefer-default-export
export class JuridicalPersonInput extends PersonInput {
  @Field()
  companyName: string;
}
