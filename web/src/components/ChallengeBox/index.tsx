import { useContext } from 'react';
import Image from 'next/image';

import { ChallengesContext, CountdownContext, UserContext } from 'contexts';

import { Active, NotActive, Wrapper } from './styles';

export function ChallengeBox() {
  const { activeChallenge, handleResetChallenge, handleCompleteChallenge } =
    useContext(ChallengesContext);

  const { toggleCountdown } = useContext(CountdownContext);

  const { theme } = useContext(UserContext);

  const handleFailedChallenge = () => {
    toggleCountdown();
    handleResetChallenge();
  };

  const handleSucceededChallenge = () => {
    toggleCountdown();
    handleCompleteChallenge();
  };

  return (
    <Wrapper className={theme}>
      {activeChallenge ? (
        <Active>
          <header>Get {activeChallenge.amount} xp</header>

          <main>
            <Image
              src={`/icons/${activeChallenge.type}.svg`}
              alt="Level Up"
              width={140}
              height={112}
            />
            <strong>New challenge!</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button type="button" onClick={handleFailedChallenge}>
              Failed
            </button>

            <button type="button" onClick={handleSucceededChallenge}>
              Done
            </button>
          </footer>
        </Active>
      ) : (
        <NotActive>
          <strong>Finish a cycle to receive a challenge</strong>
          <p>
            <Image src="/icons/level-up.svg" alt="Level Up" width={59} height={80} />
            Level up by completing challenges
          </p>
        </NotActive>
      )}
    </Wrapper>
  );
}