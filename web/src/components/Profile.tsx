import Image from 'next/image';
import { useContext } from 'react';

import { ChallengesContext, UserContext } from 'contexts';

import styles from 'styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <div className={styles.container}>
      <Image
        className={styles.picture}
        src={
          user?.github?.avatar_url ??
          'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
        }
        alt="Your profile pic"
        width={1000}
        height={1000}
      />

      <div>
        <strong>{user?.github?.name}</strong>
        <br />
        <strong>{user?.username}</strong>
        <p>
          <Image src="/icons/level.svg" width={14} height={16} alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
