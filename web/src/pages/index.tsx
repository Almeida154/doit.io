import { GetServerSideProps } from 'next';

import Head from 'next/head';
import { useContext, useEffect } from 'react';

import axios from 'axios';

import Router from 'next/router';

import { User, UserContext } from 'contexts/UserContext';

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
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const githubCode = urlParams.get('code');

    if (githubCode) {
      handleLogin(githubCode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        background: '#5965E0',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Head>
        <title>Login | move.it</title>
      </Head>

      <button onClick={handleGitHubAuth}>Login com Github</button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { access_token } = req.cookies;

  let authenticatedUser = null;

  if (access_token) {
    const { data: user } = await axios.post('http://localhost:3333/auth', {
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
