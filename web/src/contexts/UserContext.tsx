import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import { addDays } from 'date-fns';
import Cookies from 'js-cookie';
import Router from 'next/router';

import api from 'services/api';

import { darkTheme, lightTheme } from 'styles';

export interface User {
  id: string;
  username: string;
  completedChallenges: number;
  currentXp: number;
  level: number;
  totalXp: number;
  isDarkMode: boolean;
  github: {
    name: string;
    company: string;
    avatar_url: string;
    html_url: string;
  };
}

interface UserContextData {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  handleLogin: (githubCode: string) => void;
  handleLogout: () => void;
}

interface UserContextProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    if (window.localStorage) {
      const storageUser = localStorage.getItem('@user');
      setUser(JSON.parse(storageUser as string));

      const userTheme = user.isDarkMode ? darkTheme : lightTheme;
      setTheme(userTheme);
    }
  }, [user?.isDarkMode]);

  const handleLogin = async (githubCode: string) => {
    const { data: user } = await api.get(`/login?code=${githubCode}`);

    if (user) {
      Cookies.set('access_token', user.accessToken, {
        expires: addDays(new Date(), 7),
      });

      setUser(user);

      localStorage.setItem('@user', JSON.stringify(user));

      Router.replace('/home');
    }
  };

  const handleLogout = () => {
    Router.replace('/');
    Cookies.remove('access_token');
    setUser({} as User);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        handleLogin,
        handleLogout,
      }}
    >
      <div className={theme}>{children}</div>
    </UserContext.Provider>
  );
};
