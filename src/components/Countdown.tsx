import { useEffect, useState } from 'react';

import styles from 'styles/components/Countdown.module.css';

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [leftMinuteNumber, rightMinuteNumber] = String(minutes)
    .padStart(2, '0')
    .split('');

  const [leftSecondNumber, rightSecondNumber] = String(seconds)
    .padStart(2, '0')
    .split('');

  const startCountdown = () => setActive(true);

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => setTime((prev) => prev - 1), 1000);
    }
  }, [active, time]);

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

      <button
        type="button"
        className={styles.countdownButton}
        onClick={startCountdown}
      >
        Iniciar um ciclo
      </button>
    </>
  );
}
