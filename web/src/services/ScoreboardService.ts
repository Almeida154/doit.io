import { User } from 'contexts/UserContext';
import api from 'utils/api';

class ScoreboardService {
  static getScoreboard = async (): Promise<{ users?: User[]; error?: unknown }> => {
    try {
      const { data } = await api.get('/scoreboard');
      return { users: data.users };
    } catch (error) {
      console.log(error);
      return { error: 'something went wrong' };
    }
  };
}

export { ScoreboardService };
