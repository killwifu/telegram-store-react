import styled from '@emotion/styled';
import { useEffect } from 'react';

const Header = () => {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <HeaderRoot>
      <Button onClick={onClose}>Close</Button>
      <UserName>Приветствую вас, {tg.initDataUnsafe?.user?.username}</UserName>
    </HeaderRoot>
  );
};

const HeaderRoot = styled('header')`
  background-color: black;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled('button')`
  background-color: violet;
  color: White;
  border-radius: 10px;
  padding: 5px;
`;

const UserName = styled('span')`
  display: block;
  color: white;
`;

export default Header;
