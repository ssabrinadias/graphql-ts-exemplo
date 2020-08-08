import HttpClient from '../../server/common/http/httpclient';
import { IUser } from '../model/user.model';

class UserService {
  static async getUser(id: number): Promise<IUser> {
    const { data } = await HttpClient.request({
      url: 'https://userdata.free.beeceptor.com/',
      method: 'GET',
    });
    const dataFilter = data.filter((item) => Number(item.id) === id);
    return dataFilter.pop() as IUser || [];
  }

  static async getAllUser(): Promise<IUser[]> {
    const { data } = await HttpClient.request({
      url: 'https://userdata.free.beeceptor.com/',
      method: 'GET',
    });
    return data as IUser[];
  }
}

export default UserService;
