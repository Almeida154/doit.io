import { useContext, useEffect } from 'react';
import { GetServerSideProps } from 'next';

import Head from 'next/head';
import Image from 'next/image';
import Router from 'next/router';

import axios from 'axios';

import { ImGithub } from 'react-icons/im';

import { DEV_BASE_SERVER_URI } from 'utils/settings';

import { User, UserContext } from 'contexts/UserContext';

import { Button } from 'components';

import DoitLogo from 'icons/Doit';

import { Wrapper, Content, AppAds, Actions } from './styles';

interface LoginProps {
  authenticatedUser: User;
}

export default function Login({ authenticatedUser }: LoginProps) {
  const { setUser, handleLogin } = useContext(UserContext);

  const handleGitHubAuth = () => {
    const githubClientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const githubIntegrationUrl = `https://github.com/login/oauth/authorize?client_id=${githubClientId}`;
    window.location.assign(githubIntegrationUrl);
  };

  useEffect(() => {
    if (authenticatedUser) {
      setUser(authenticatedUser);
      Router.replace('/home');
    }
  }, [authenticatedUser, setUser]);

  useEffect(() => {
    document.body.style.background = '#000000';

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const githubCode = urlParams.get('code');

    if (githubCode) {
      handleLogin(githubCode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Login | doit.io</title>
      </Head>

      <Content>
        <Image alt="Lamps icon" src="/icons/lamps.svg" width="282" height="195" />

        <DoitLogo />

        <p>
          A Pomodoro tool for developers. Become more productive and improve your
          time management skills.
        </p>

        <Actions>
          <Button
            onClick={handleGitHubAuth}
            text="SIGN IN WITH GITHUB"
            icon={() => <ImGithub size={24} color="#fff" />}
            iconPosition="left"
          />
          <a
            style={{ fontSize: '20px' }}
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            Create a GitHub account
          </a>
        </Actions>
      </Content>

      <AppAds>
        <Image alt="Doit.io app" src="/login-app.png" width="915" height="1770" />
      </AppAds>
    </Wrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { access_token } = req.cookies;

  let authenticatedUser = null;

  if (access_token) {
    const { data: user } = await axios.post(`${DEV_BASE_SERVER_URI}/auth`, {
      accessToken: access_token,
    });

    authenticatedUser = user;
  }

  return {
    props: {
      authenticatedUser,
    },
  };
};
