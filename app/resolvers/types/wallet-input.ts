import { InputType, Field } from 'type-graphql';
import { Length } from 'class-validator';
import { Wallet } from '../../entities/Wallet';

@InputType()
export default class WalletInput implements Partial<Wallet> {
  @Field()
    @Length(1, 255)
    // eslint-disable-next-line camelcase
    pan_card!: string;

  @Field()
    brand!: string;
}
