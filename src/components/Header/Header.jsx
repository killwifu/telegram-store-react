import styled from '@emotion/styled';
import { Button } from '../Button';

const Header = () => {
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.close();
  };

  return (
    <HeaderRoot>
      <Button onClick={onClose}>Close</Button>
      <span className='username'>Приветствую вас, {tg.initDataUnsafe?.user?.userName}</span>
    </HeaderRoot>
  );
};

const HeaderRoot = styled('header')`
  background-color: black;
`;

export default Header;
