import React, { useContext } from 'react';

import { ChallengesContext, UserContext } from 'contexts';

import { Wrapper } from './styles';

export function CompletedChallenges() {
  const { theme, user } = useContext(UserContext);

  return (
    <Wrapper className={theme}>
      <span>Completed challenges</span>
      <span>{user.completedChallenges}</span>
    </Wrapper>
  );
}
