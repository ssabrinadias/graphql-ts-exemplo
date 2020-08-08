import {
  InterfaceType, Field, Int, ID,
} from 'type-graphql';

import { IResource } from '../resource/resource.interface';

@InterfaceType({
  resolveType: (value) => value.constructor.name,
})
// eslint-disable-next-line import/prefer-default-export
export abstract class IPerson implements IResource {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;
}
