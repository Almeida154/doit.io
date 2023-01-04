import {
  ExperienceBar,
  Profile,
  CompletedChallenges,
  Countdown,
  ChallengeBox,
} from 'components';
import { CountdownProvider } from 'contexts/CountdownContext';

import Head from 'next/head';

import styles from 'styles/pages/Home.module.css';

export default function Home() {
  return (
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
  );
}
