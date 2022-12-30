import { ChallengesContext } from 'contexts';
import { useContext, useEffect, useState } from 'react';

import styles from 'styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const { handleStartNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(25 * 60);
  const [isActive, setActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formatNumber = (number: Number) => String(number).padStart(2, '0').split('');

  const [leftMinuteNumber, rightMinuteNumber] = formatNumber(minutes);
  const [leftSecondNumber, rightSecondNumber] = formatNumber(seconds);

  const toggleCountdown = () => {
    if (isActive) {
      clearInterval(countdownTimeout);
      setTime(25 * 60);
    }
    setActive((prev) => !prev);
  };

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => setTime((prev) => prev - 1), 1000);
    } else if (isActive && time === 0) {
      setActive(false);
      setHasFinished(true);
      handleStartNewChallenge();
    }
  }, [handleStartNewChallenge, isActive, time]);

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
