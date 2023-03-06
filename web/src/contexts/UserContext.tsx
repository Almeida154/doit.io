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

import api from 'utils/api';

import { darkTheme, lightTheme } from 'styles/theme';
import { UserService } from 'services';

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
  theme: any;
  handleUpdateUser: ({}: User) => Promise<void>;
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
      const storageUser = JSON.parse(localStorage.getItem('@user') as string);

      if (storageUser) {
        setUser(storageUser);

        const userTheme = user.isDarkMode ? darkTheme : lightTheme;
        document.body.style.background = userTheme.colors.background.value;
        setTheme(userTheme);
      }
    }
  }, [user?.isDarkMode]);

  const handleLogin = async (githubCode: string) => {
    const { data: user } = await api.get(`/login?code=${githubCode}`);

    if (user) {
      Cookies.set('access_token', user.accessToken, {
        expires: addDays(new Date(), 7),
      });

      localStorage.setItem('@user', JSON.stringify(user));
      setUser(user);
      Router.replace('/home');
    }
  };

  const handleLogout = () => {
    Router.replace('/');
    Cookies.remove('access_token');
    localStorage.removeItem('@user');
    setUser({} as User);
  };

  const handleUpdateUser = async (user: User) => {
    const { user: updatedUser } = await UserService.updateUser(user);

    setUser(updatedUser);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        handleLogin,
        handleLogout,
        theme,
        handleUpdateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
