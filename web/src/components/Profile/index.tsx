import { useContext } from 'react';
import { BiMeteor } from 'react-icons/bi';

import { UserContext } from 'contexts';
import { theme as appTheme } from 'styles';

import { Wrapper, Picture } from './styles';

export function Profile() {
  const { user, theme } = useContext(UserContext);

  return (
    <Wrapper className={theme}>
      <Picture
        src={
          user?.avatar_url ??
          'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
        }
        alt="Your profile pic"
        width={1000}
        height={1000}
      />

      <div>
        <strong>{user?.name}</strong>
        <br />
        <strong className="username">{user?.username}</strong>
        <p>
          <BiMeteor size={16} color={appTheme.colors.title.toString()} />
          LVL {user.level}
        </p>
      </div>
    </Wrapper>
  );
}
