import React, { useContext } from 'react';
import { BiExit, BiHomeAlt, BiMedal } from 'react-icons/bi';

import { UserContext } from 'contexts';
import Doit from 'icons/Doit';

import { Wrapper, Routes, Item } from './styles';

interface SidebarMenuProps {
  index: number;
  setIndex: (index: number) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ index, setIndex }) => {
  const { theme, handleLogout } = useContext(UserContext);

  return (
    <Wrapper className={theme}>
      <Doit iconOnly />

      <Routes>
        <Item onClick={() => setIndex(0)} isActive={index === 0}>
          <BiHomeAlt size={28} />
        </Item>

        <Item onClick={() => setIndex(1)} isActive={index === 1}>
          <BiMedal size={28} />
        </Item>
      </Routes>

      <Item onClick={handleLogout} exit>
        <BiExit size={24} color="#ff1239" />
      </Item>
    </Wrapper>
  );
};

export { SidebarMenu };
