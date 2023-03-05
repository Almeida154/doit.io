import { User } from 'contexts/UserContext';
import api from 'utils/api';

class UserService {
  static updateUser = async (user: User) => {
    try {
      const { data } = await api.put('/user/update', {
        user,
      });

      return { user: data.user };
    } catch (error) {
      console.log(error);
      return { error: 'something went wrong' };
    }
  };

  static getUser = async (accessToken: string) => {
    try {
      const { data } = await api.post(`/auth`, {
        accessToken,
      });

      return { user: data };
    } catch (error) {
      console.log(error);
      return { error: 'something went wrong' };
    }
  };
}

export { UserService };
