import HttpClient from '../common/http/httpclient';
import { IWallet } from '../model/wallet.model';

class WalletService {
  static async getWallet(id: number): Promise<IWallet> {
    const { data } = await HttpClient.request({
      url: 'https://wallet.free.beeceptor.com/',
      method: 'GET',
    });
    return data[1] as IWallet;
  }
}

export default WalletService;
