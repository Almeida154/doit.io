import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

import Cookies from 'js-cookie';

import challenges from '../../challenges.json';
import { LevelUpModal } from 'components';
import { UserContext } from './UserContext';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  activeChallenge: Challenge | null;
  neededExperienceToNextLevel: number;
  handleLevelUp: () => void;
  handleStartNewChallenge: () => void;
  handleResetChallenge: () => void;
  handleCompleteChallenge: () => void;
  handleCloseLevelUpModal: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider: React.FC<ChallengesProviderProps> = ({
  children,
}) => {
  const { handleUpdateUser, user } = useContext(UserContext);

  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null);
  const [isLevelModalUpOpen, setIsLevelModalUpOpen] = useState(false);

  const DIFFICULT = 4;

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const neededExperienceToNextLevel = Math.pow((user.level + 1) * DIFFICULT, 2);

  const handleLevelUp = async () => {
    await handleUpdateUser({
      ...user,
      level: user.level + 1,
    });

    setIsLevelModalUpOpen(true);
  };

  const handleCloseLevelUpModal = () => setIsLevelModalUpOpen(false);

  const handleStartNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex] as Challenge;

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('New challenge! 🎉', {
        body: `Valendo ${challenge.amount} xp!`,
      });
    }
  };

  const handleResetChallenge = () => setActiveChallenge(null);

  const handleCompleteChallenge = async () => {
    if (!activeChallenge) return;

    const { amount } = activeChallenge;
    let finalExperience = user.currentXp + amount;

    if (finalExperience >= neededExperienceToNextLevel) {
      finalExperience -= neededExperienceToNextLevel;

      await handleUpdateUser({
        ...user,
        level: user.level + 1,
        completedChallenges: user.completedChallenges + 1,
        currentXp: finalExperience,
        totalXp: user.totalXp + user.currentXp,
      });

      setIsLevelModalUpOpen(true);
      setActiveChallenge(null);
      return;
    }

    setActiveChallenge(null);

    await handleUpdateUser({
      ...user,
      completedChallenges: user.completedChallenges + 1,
      currentXp: finalExperience,
      totalXp: user.totalXp + user.currentXp,
    });
  };

  return (
    <ChallengesContext.Provider
      value={{
        activeChallenge,
        neededExperienceToNextLevel,
        handleLevelUp,
        handleStartNewChallenge,
        handleResetChallenge,
        handleCompleteChallenge,
        handleCloseLevelUpModal,
      }}
    >
      {children}

      {isLevelModalUpOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
};
