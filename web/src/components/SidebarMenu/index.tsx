import React, { useContext } from 'react';
import { BiExit, BiHomeAlt, BiMedal } from 'react-icons/bi';

import { UserContext } from 'contexts';
import Doit from 'icons/Doit';

import { useWindowSize } from 'hooks';

import { Wrapper, Routes, Item } from './styles';

interface SidebarMenuProps {
  index: number;
  setIndex: (index: number) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ index, setIndex }) => {
  const { theme, handleLogout, handleToggleTheme } = useContext(UserContext);

  const windowWidth = useWindowSize().width ?? 0;

  return (
    <Wrapper className={theme}>
      <Doit
        onClick={handleToggleTheme}
        color={theme.colors.title}
        role="button"
        iconOnly
      />

      <Routes>
        <Item onClick={() => setIndex(0)} isActive={index === 0}>
          <BiHomeAlt size={windowWidth > 640 ? 28 : 36} />
        </Item>

        <Item onClick={() => setIndex(1)} isActive={index === 1}>
          <BiMedal size={windowWidth > 640 ? 28 : 36} />
        </Item>
      </Routes>

      <Item onClick={handleLogout} exit>
        <BiExit size={windowWidth > 640 ? 28 : 36} color="#ff1239" />
      </Item>
    </Wrapper>
  );
};

export { SidebarMenu };
