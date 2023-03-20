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

import { Wrapper } from './styles';

const Pomodoro: React.FC = () => {
  return (
    <ChallengesProvider>
      <Wrapper>
        <Head>
          <title>Pomodoro | doit.io</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div className="challengeBoxContainer">
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </Wrapper>
    </ChallengesProvider>
  );
};

export { Pomodoro };
