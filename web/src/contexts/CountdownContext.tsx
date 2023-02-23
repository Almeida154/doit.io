import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  toggleCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

const EACH_CYCLE_TIME = 0.1 * 60;
let countdownTimeout: NodeJS.Timeout;

export const CountdownProvider: React.FC<CountdownProviderProps> = ({
  children,
}) => {
  const { handleStartNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(EACH_CYCLE_TIME);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const toggleCountdown = () => {
    if (isActive) {
      clearTimeout(countdownTimeout);
      setHasFinished(false);
      setIsActive(false);
      setTime(EACH_CYCLE_TIME);
    } else {
      setIsActive(true);
    }
  };

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => setTime((prev) => prev - 1), 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      handleStartNewChallenge();
    }
  }, [handleStartNewChallenge, isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        toggleCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
