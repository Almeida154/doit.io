import { CountdownContext } from 'contexts';
import { useContext, useEffect, useState } from 'react';

import { Wrapper } from './styles';

export function Countdown() {
  const { minutes, seconds, hasFinished, isActive, toggleCountdown } =
    useContext(CountdownContext);

  const formatNumber = (number: Number) => String(number).padStart(2, '0').split('');

  const [leftMinuteNumber, rightMinuteNumber] = formatNumber(minutes);
  const [leftSecondNumber, rightSecondNumber] = formatNumber(seconds);

  return (
    <>
      <Wrapper>
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

      {hasFinished ? (
        <button disabled onClick={toggleCountdown}>
          Closed cycle
        </button>
      ) : (
        <button type="button" onClick={toggleCountdown}>
          {isActive ? 'Give up of this cycle' : 'Start a cycle'}
        </button>
      )}
    </>
  );
}
