import { GetServerSideProps } from 'next';

import Head from 'next/head';
import { useEffect } from 'react';

import Cookies from 'js-cookie';

import api from 'services/api';
import { addDays } from 'date-fns';
import Router from 'next/router';

export default function Login() {
  const handleGithubLogin = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`
    );
  };

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const gitHubCode = urlParams.get('code');

    if (gitHubCode) {
      handleLogin(gitHubCode);
    }
  }, []);

  const handleLogin = async (gitHubCode: string) => {
    const { data } = await api.get(`/login?code=${gitHubCode}`);

    if (data) {
      Cookies.set('access_token', data.accessToken, {
        expires: addDays(new Date(), 7),
      });

      Router.replace('/home');
    }
  };

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

      <button onClick={handleGithubLogin}>Login com Github</button>
    </div>
  );
}
