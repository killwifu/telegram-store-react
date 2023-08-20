import styled from '@emotion/styled';
import { useEffect } from 'react';
import {useTelegram} from "../../shared/hooks/useTelegram.js";

const Header = () => {

  const {onClose,tg,onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready();
  }, [tg]);


  return (
    <HeaderRoot>
      <Button onClick={onClose}>Close</Button>
      {/*<UserName>Приветствую вас, {tg.initDataUnsafe?.user?.username}</UserName>*/}
        <Button onClick={onToggleButton}>toggle</Button>
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
  cursor:pointer;
`;

const UserName = styled('span')`
  display: block;
  color: white;
`;

export default Header;
