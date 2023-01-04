import { ReactNode, createContext, useEffect, useState } from 'react';

import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  completedChallenges: number;
  activeChallenge: Challenge | null;
  neededExperienceToNextLevel: number;
  handleLevelUp: () => void;
  handleStartNewChallenge: () => void;
  handleResetChallenge: () => void;
  handleCompleteChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider: React.FC<ChallengesProviderProps> = ({
  children,
}) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null);

  const DIFFICULT = 4;

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const neededExperienceToNextLevel = Math.pow((level + 1) * DIFFICULT, 2);

  const handleLevelUp = () => setLevel((prev) => prev + 1);

  const handleStartNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex] as Challenge;

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount} xp!`,
      });
    }
  };

  const handleResetChallenge = () => setActiveChallenge(null);

  const handleCompleteChallenge = () => {
    if (!activeChallenge) return;

    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= neededExperienceToNextLevel) {
      finalExperience -= neededExperienceToNextLevel;
      handleLevelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setCompletedChallenges((prev) => prev + 1);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        completedChallenges,
        activeChallenge,
        neededExperienceToNextLevel,
        handleLevelUp,
        handleStartNewChallenge,
        handleResetChallenge,
        handleCompleteChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
