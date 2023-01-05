import { GetServerSideProps } from 'next';
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

import styles from 'styles/pages/Home.module.css';

interface HomeProps {
  level: number;
  currentExperience: number;
  completedChallenges: number;
}

export default function Home(props: HomeProps) {
  const { level, currentExperience, completedChallenges } = props;

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
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, completedChallenges } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      completedChallenges: Number(completedChallenges),
    },
  };
};
