import { ExperienceBar, Profile, CompletedChallenges, Countdown } from 'components';

import Head from 'next/head';

import styles from 'styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div></div>
      </section>
    </div>
  );
}
