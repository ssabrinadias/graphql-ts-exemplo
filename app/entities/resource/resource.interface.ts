import { InterfaceType, ID, Field } from 'type-graphql';

@InterfaceType()
// eslint-disable-next-line import/prefer-default-export
export abstract class IResource {
  @Field((type) => ID)
  id: string;
}
