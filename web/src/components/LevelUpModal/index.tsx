import Image from 'next/image';
import { useContext } from 'react';

import { ChallengesContext } from 'contexts';

import { Overlay, Wrapper } from './styles';

export function LevelUpModal() {
  const { level, handleCloseLevelUpModal } = useContext(ChallengesContext);

  return (
    <>
      <Overlay>
        <Wrapper>
          <header>{level}</header>

          <strong>Congrats</strong>
          <p>You have reached a new level!</p>

          <button type="button" onClick={handleCloseLevelUpModal}>
            <Image src="/icons/close.svg" width={40} height={40} alt="Close modal" />
          </button>
        </Wrapper>
      </Overlay>
    </>
  );
}
