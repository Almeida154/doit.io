import { CountdownContext } from 'contexts';
import { useContext, useEffect, useState } from 'react';

import styles from 'styles/components/Countdown.module.css';

export function Countdown() {
  const { minutes, seconds, hasFinished, isActive, toggleCountdown } =
    useContext(CountdownContext);

  const formatNumber = (number: Number) => String(number).padStart(2, '0').split('');

  const [leftMinuteNumber, rightMinuteNumber] = formatNumber(minutes);
  const [leftSecondNumber, rightSecondNumber] = formatNumber(seconds);

  return (
    <>
      <div className={styles.container}>
        <div>
          <span>{leftMinuteNumber}</span>
          <span>{rightMinuteNumber}</span>
        </div>

        <span>:</span>

        <div>
          <span>{leftSecondNumber}</span>
          <span>{rightSecondNumber}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}
          onClick={toggleCountdown}
        >
          Ciclo encerrado
        </button>
      ) : (
        <button
          type="button"
          className={`${styles.countdownButton} ${
            isActive && styles.countdownButtonActive
          }`}
          onClick={toggleCountdown}
        >
          {isActive ? 'Abandonar ciclo' : 'Iniciar um ciclo'}
        </button>
      )}
    </>
  );
}
