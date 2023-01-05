import Image from 'next/image';
import { useContext } from 'react';

import { ChallengesContext } from 'contexts';

import styles from 'styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  const { level, handleCloseLevelUpModal } = useContext(ChallengesContext);

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <header>{level}</header>

          <strong>Congrats</strong>
          <p>You have reached a new level!</p>

          <button type="button" onClick={handleCloseLevelUpModal}>
            <Image src="/icons/close.svg" width={40} height={40} alt="Close modal" />
          </button>
        </div>
      </div>
    </>
  );
}
