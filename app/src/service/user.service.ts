import HttpClient from '../common/http/httpclient';
import { IUser } from '../model/user.model';

class UserService {
  static async getUser(id: number): Promise<IUser> {
    const { data } = await HttpClient.request({
      url: 'https://userslist.free.beeceptor.com/',
      method: 'GET',
    });
    return data[1] as IUser;
  }

  static async getAllUser(): Promise<IUser[]> {
    const { data } = await HttpClient.request({
      url: 'https://userslist.free.beeceptor.com/',
      method: 'GET',
    });
    return data as IUser[];
  }
}

export default UserService;
