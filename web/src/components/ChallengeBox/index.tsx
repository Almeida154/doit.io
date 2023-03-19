import { useContext } from 'react';
import Image from 'next/image';

import { BiMeteor } from 'react-icons/bi';

import { Button } from 'components';
import { ChallengesContext, CountdownContext, UserContext } from 'contexts';
import { theme as appTheme } from 'styles';

import { Active, NotActive, Wrapper } from './styles';

export function ChallengeBox() {
  const { activeChallenge, handleResetChallenge, handleCompleteChallenge } =
    useContext(ChallengesContext);

  const { toggleCountdown } = useContext(CountdownContext);
  const { theme } = useContext(UserContext);

  const handleFailedChallenge = () => {
    toggleCountdown();
    handleResetChallenge();
  };

  const handleSucceededChallenge = () => {
    toggleCountdown();
    handleCompleteChallenge();
  };

  return (
    <Wrapper className={theme}>
      {activeChallenge ? (
        <Active>
          <header>Get {activeChallenge.amount} xp</header>

          <main>
            <Image
              src={`/icons/${activeChallenge.type}.svg`}
              alt="Level Up"
              width={140}
              height={112}
            />
            <strong>New challenge!</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <Button type="button" onClick={handleFailedChallenge} text="Failed" />
            <Button type="button" onClick={handleSucceededChallenge} text="Done" />
          </footer>
        </Active>
      ) : (
        <NotActive>
          <strong>Finish a cycle to receive a challenge</strong>
          <p>
            <BiMeteor size={64} color={appTheme.colors.text.toString()} />
            Level up by completing challenges
          </p>
        </NotActive>
      )}
    </Wrapper>
  );
}
