import React, { useContext } from 'react';

import { ChallengesContext } from 'contexts';

import styles from 'styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
  const { completedChallenges } = useContext(ChallengesContext);

  return (
    <div className={styles.container}>
      <span>Completed challenges</span>
      <span>{completedChallenges}</span>
    </div>
  );
}
