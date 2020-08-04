import HttpClient from '../../server/common/http/httpclient';
import { IWallet } from '../model/wallet.model';

class WalletService {
  static async getWallet(id: number): Promise<IWallet[]> {
    const { data } = await HttpClient.request({
      url: 'https://wallet.free.beeceptor.com/',
      method: 'GET',
    });
    const dataFilter = data.filter((item) => Number(item.id) === id);
    return dataFilter as IWallet[];
  }
}

export default WalletService;
