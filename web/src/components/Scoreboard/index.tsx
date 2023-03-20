import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';

import { BiMeteor } from 'react-icons/bi';

import { theme as appTheme } from 'styles';

import {
  Wrapper,
  Title,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IndexText,
  UserDataWrapper,
  Picture,
} from './styles';

import { UserContext } from 'contexts';
import { User } from 'contexts/UserContext';
import { ScoreboardService } from 'services';

const Scoreboard: React.FC = () => {
  const { theme } = useContext(UserContext);

  const [users, setUsers] = useState<User[]>([] as User[]);

  useEffect(() => {
    (async () => {
      const { users, error } = await ScoreboardService.getScoreboard();

      if (error) {
        return;
      }

      users && setUsers(users);
    })();
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Scoreboard | doit.io</title>
      </Head>

      <Title>Scoreboard</Title>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell isHeader isIndex className="index">
              Pos.
            </TableCell>
            <TableCell isHeader className="user">
              User
            </TableCell>
            <TableCell isHeader className="challenges">
              Challenges
            </TableCell>
            <TableCell isHeader className="experience">
              Experience
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell isIndex className="index">
                <IndexText>{index + 1}</IndexText>
              </TableCell>

              <TableCell className="user">
                <UserDataWrapper className={theme}>
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
                    <p>
                      <BiMeteor size={12} color={appTheme.colors.text.toString()} />
                      LVL {user.level}
                    </p>
                  </div>
                </UserDataWrapper>
              </TableCell>

              <TableCell className="challenges">
                <p>
                  <span>{user.completedChallenges}</span> completed
                </p>
              </TableCell>

              <TableCell className="experience">
                <p>
                  <span>{user.totalXp}</span> xp
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Wrapper>
  );
};

export { Scoreboard };
