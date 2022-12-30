import { useContext } from 'react';
import Image from 'next/image';

import { ChallengesContext } from 'contexts';

import styles from 'styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, handleResetChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.container}>
      {activeChallenge ? (
        <div className={styles.active}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <Image
              src={`/icons/${activeChallenge.type}.svg`}
              alt="Level Up"
              width={140}
              height={112}
            />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.failedButton}
              onClick={handleResetChallenge}
            >
              Falhei
            </button>

            <button type="button" className={styles.succeededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.notActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <Image src="/icons/level-up.svg" alt="Level Up" width={59} height={80} />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
