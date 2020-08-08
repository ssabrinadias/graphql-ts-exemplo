import { InputType, Field } from 'type-graphql';

@InputType()
// eslint-disable-next-line import/prefer-default-export
export class PersonInput {
    @Field()
    name: string;
}
