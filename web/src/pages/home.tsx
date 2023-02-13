import { GetServerSideProps } from 'next';
import { useContext } from 'react';
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

import styles from 'styles/pages/Home.module.css';

interface HomeProps {
  level: number;
  currentExperience: number;
  completedChallenges: number;
}

export default function Home({
  level,
  currentExperience,
  completedChallenges,
}: HomeProps) {
  const { handleLogout } = useContext(UserContext);

  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      completedChallenges={completedChallenges}
    >
      <div className={styles.container}>
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
