import { ChallengesContext } from 'contexts';
import { useContext } from 'react';

import styles from 'styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, neededExperienceToNextLevel } =
    useContext(ChallengesContext);

  const currentLevelProgress =
    Math.round(currentExperience * 100) / neededExperienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${currentLevelProgress}%` }} />

        <span
          className={styles.currentExperience}
          style={{ left: `${currentLevelProgress}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{neededExperienceToNextLevel} xp</span>
    </header>
  );
}
