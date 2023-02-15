import React, { useContext } from 'react';

import { ChallengesContext } from 'contexts';

import { Wrapper } from './styles';

export function CompletedChallenges() {
  const { completedChallenges } = useContext(ChallengesContext);

  return (
    <Wrapper>
      <span>Completed challenges</span>
      <span>{completedChallenges}</span>
    </Wrapper>
  );
}
