import { GetServerSideProps } from 'next';
import { useContext, useEffect, useState } from 'react';

import { Pomodoro, Scoreboard, SidebarMenu } from 'components';
import { UserContext } from 'contexts';
import { UserService } from 'services';

import { Wrapper } from './styles';

export default function Home({ accessToken }: { accessToken: string }) {
  const [tabIndex, setTabIndex] = useState(0);

  const { theme, setUser } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const res = await UserService.getUser(accessToken);
      res.user && setUser(res.user);
    })();
  }, [setUser, accessToken]);

  return (
    <Wrapper className={theme}>
      <SidebarMenu index={tabIndex} setIndex={setTabIndex} />
      {tabIndex === 0 && <Pomodoro />}
      {tabIndex === 1 && <Scoreboard />}
    </Wrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { access_token } = req.cookies;

  if (!access_token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      accessToken: access_token,
    },
  };
};
