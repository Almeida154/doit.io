import React, { useContext } from 'react';

import { ChallengesContext, UserContext } from 'contexts';

import { Wrapper } from './styles';

export function CompletedChallenges() {
  const { completedChallenges } = useContext(ChallengesContext);
  const { theme } = useContext(UserContext);

  return (
    <Wrapper className={theme}>
      <span>Completed challenges</span>
      <span>{completedChallenges}</span>
    </Wrapper>
  );
}
