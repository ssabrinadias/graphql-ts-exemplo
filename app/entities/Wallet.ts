import { ObjectType, Field, ID } from 'type-graphql';
import WalletService from '../src/service/wallet.service';

@ObjectType({ description: 'The Wallet model' })
export class Wallet {
    @Field(() => ID)
    id!: number;

    @Field()
    // eslint-disable-next-line camelcase
    pan_card!: string;

    @Field()
    brand!: string;
}

export const WalletModel = WalletService;
