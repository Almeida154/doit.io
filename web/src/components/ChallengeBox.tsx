import { useContext } from 'react';
import Image from 'next/image';

import { ChallengesContext, CountdownContext } from 'contexts';

import styles from 'styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, handleResetChallenge, handleCompleteChallenge } =
    useContext(ChallengesContext);

  const { toggleCountdown } = useContext(CountdownContext);

  const handleFailedChallenge = () => {
    toggleCountdown();
    handleResetChallenge();
  };

  const handleSucceededChallenge = () => {
    toggleCountdown();
    handleCompleteChallenge();
  };

  return (
    <div className={styles.container}>
      {activeChallenge ? (
        <div className={styles.active}>
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
            <button
              type="button"
              className={styles.failedButton}
              onClick={handleFailedChallenge}
            >
              Failed
            </button>

            <button
              type="button"
              className={styles.succeededButton}
              onClick={handleSucceededChallenge}
            >
              Done
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.notActive}>
          <strong>Finish a cycle to receive a challenge</strong>
          <p>
            <Image src="/icons/level-up.svg" alt="Level Up" width={59} height={80} />
            Level up by completing challenges
          </p>
        </div>
      )}
    </div>
  );
}
