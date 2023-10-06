import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useTelegram } from '../../shared/hooks/useTelegram.js';
import LanguageBar from '../lang-menu/lang-menu.jsx';

const Header = () => {
  const { onClose, tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <HeaderRoot>
      <Button onClick={onClose}>Close</Button>
      {/* <UserName>Приветствую вас, {tg.initDataUnsafe?.user?.username}</UserName> */}
      <UserName>Приветствую вас, юзернейм</UserName>
      <LanguageBar />
      <Button onClick={onToggleButton}>toggle</Button>
    </HeaderRoot>
  );
};

const HeaderRoot = styled('header')`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled('button')`
  background-color: violet;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
`;

const UserName = styled('span')`
  display: block;
  color: white;
`;

export default Header;
