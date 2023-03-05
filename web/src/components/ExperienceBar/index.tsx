import { ChallengesContext, UserContext } from 'contexts';
import { useContext } from 'react';

import { Wrapper } from './styles';

export function ExperienceBar() {
  const { neededExperienceToNextLevel } = useContext(ChallengesContext);

  const { theme, user } = useContext(UserContext);

  const currentLevelProgress =
    Math.round(user.currentXp * 100) / neededExperienceToNextLevel;

  return (
    <Wrapper className={theme}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${currentLevelProgress}%` }} />

        <span
          className="currentExperience"
          style={{ left: `${currentLevelProgress}%` }}
        >
          {user.currentXp} xp
        </span>
      </div>
      <span>{neededExperienceToNextLevel} xp</span>
    </Wrapper>
  );
}
