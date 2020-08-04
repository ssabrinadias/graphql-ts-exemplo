/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Resolver, Arg, Query } from 'type-graphql';
import { Wallet, WalletModel } from '../entities/Wallet';

@Resolver(() => Wallet)
export default class UserResolver {
  service = WalletModel;

  @Query(() => [Wallet], { nullable: false })
  async walletById(@Arg('id') id: number) {
    const res = await this.service.getWallet(id);
    return res;
  }
}
