/* eslint-disable @typescript-eslint/no-unsafe-return */
import HttpClient from '../common/http/httpclient';
import { IUser } from '../model/user.model';

class UserService {
  static async getUser(id: number): Promise<IUser[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const res = await HttpClient.request({
      url: 'https://userslist.free.beeceptor.com/',
      method: 'GET',
    });
    return res.data[0];
  }

  static async getAllUser(): Promise<IUser[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const res = await HttpClient.request({
      url: 'https://userslist.free.beeceptor.com/',
      method: 'GET',
    });
    return res.data;
  }
}

export default UserService;
