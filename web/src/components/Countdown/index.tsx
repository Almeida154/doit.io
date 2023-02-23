import { CountdownContext, UserContext } from 'contexts';
import { useContext, useEffect, useState } from 'react';

import { Wrapper } from './styles';
import { Button } from 'components';

export function Countdown() {
  const { minutes, seconds, hasFinished, isActive, toggleCountdown } =
    useContext(CountdownContext);

  const { theme } = useContext(UserContext);

  const formatNumber = (number: Number) => String(number).padStart(2, '0').split('');

  const [leftMinuteNumber, rightMinuteNumber] = formatNumber(minutes);
  const [leftSecondNumber, rightSecondNumber] = formatNumber(seconds);

  return (
    <>
      <Wrapper className={theme}>
        <div>
          <span>{leftMinuteNumber}</span>
          <span>{rightMinuteNumber}</span>
        </div>

        <span>:</span>

        <div>
          <span>{leftSecondNumber}</span>
          <span>{rightSecondNumber}</span>
        </div>
      </Wrapper>

      <div className={theme} style={{ marginTop: '32px' }}>
        {hasFinished ? (
          <Button
            style={{ width: '100%', height: '80px' }}
            onClick={toggleCountdown}
            text="Closed cycle"
            disabled
          />
        ) : (
          <Button
            style={{ width: '100%', height: '80px' }}
            onClick={toggleCountdown}
            text={isActive ? 'Give up of this cycle' : 'Start a cycle'}
          />
        )}
      </div>
    </>
  );
}
