import { useContext } from 'react';
import { BiX } from 'react-icons/bi';

import { ChallengesContext, UserContext } from 'contexts';
import { theme as appTheme } from 'styles';

import { Overlay, Wrapper } from './styles';

export function LevelUpModal() {
  const { level, handleCloseLevelUpModal } = useContext(ChallengesContext);
  const { theme } = useContext(UserContext);

  return (
    <>
      <Overlay className={theme}>
        <Wrapper>
          <header>{level}</header>

          <strong>Congrats</strong>
          <p>You have reached a new level!</p>

          <button type="button" onClick={handleCloseLevelUpModal}>
            <BiX color={appTheme.colors.title.toString()} size={24} />
          </button>
        </Wrapper>
      </Overlay>
    </>
  );
}
