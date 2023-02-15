import { ChallengesContext } from 'contexts';
import { useContext } from 'react';

import { Wrapper } from './styles';

export function ExperienceBar() {
  const { currentExperience, neededExperienceToNextLevel } =
    useContext(ChallengesContext);

  const currentLevelProgress =
    Math.round(currentExperience * 100) / neededExperienceToNextLevel;

  return (
    <Wrapper>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${currentLevelProgress}%` }} />

        <span
          className="currentExperience"
          style={{ left: `${currentLevelProgress}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{neededExperienceToNextLevel} xp</span>
    </Wrapper>
  );
}
