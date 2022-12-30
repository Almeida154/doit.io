import { ReactNode, createContext, useState } from 'react';

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

  const neededExperienceToNextLevel = Math.pow((level + 1) * DIFFICULT, 2);

  const handleLevelUp = () => setLevel((prev) => prev + 1);

  const handleStartNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex] as Challenge;

    setActiveChallenge(challenge);
  };

  const handleResetChallenge = () => setActiveChallenge(null);

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
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
