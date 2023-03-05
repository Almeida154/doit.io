import { GetServerSideProps } from 'next';
import { useContext, useEffect } from 'react';
import Head from 'next/head';

import {
  ExperienceBar,
  Profile,
  CompletedChallenges,
  Countdown,
  ChallengeBox,
} from 'components';

import { CountdownProvider } from 'contexts/CountdownContext';
import { ChallengesProvider } from 'contexts/ChallengesContext';

import { UserContext } from 'contexts';

import { Wrapper } from './styles';
import { UserService } from 'services/UserService';

export default function Home({ accessToken }: { accessToken: string }) {
  const { handleLogout, user, setUser } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const res = await UserService.getUser(accessToken);
      res.user && setUser(res.user);
    })();
  }, [setUser, user.id, accessToken]);

  return (
    <ChallengesProvider>
      <Wrapper>
        <Head>
          <title>Home | doit.io</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </Wrapper>
      <button onClick={handleLogout}>Logout</button>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { access_token } = req.cookies;

  if (!access_token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      accessToken: access_token,
    },
  };
};
