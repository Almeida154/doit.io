import { GetServerSideProps } from 'next';
import Head from 'next/head';

import Cookies from 'js-cookie';

import {
  ExperienceBar,
  Profile,
  CompletedChallenges,
  Countdown,
  ChallengeBox,
} from 'components';

import { CountdownProvider } from 'contexts/CountdownContext';
import { ChallengesProvider } from 'contexts/ChallengesContext';

import styles from 'styles/pages/Home.module.css';
import Router from 'next/router';

interface HomeProps {
  level: number;
  currentExperience: number;
  completedChallenges: number;
}

export default function Home(props: HomeProps) {
  const { level, currentExperience, completedChallenges } = props;

  const handleLogout = () => {
    Cookies.remove('access_token');
    Router.replace('/');
  };

  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      completedChallenges={completedChallenges}
    >
      <div className={styles.container}>
        <Head>
          <title>Home | move.it</title>
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
      </div>

      <button onClick={handleLogout}>Logout</button>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { level, currentExperience, completedChallenges, access_token } =
    req.cookies;

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
      level: Number(level),
      currentExperience: Number(currentExperience),
      completedChallenges: Number(completedChallenges),
    },
  };
};
