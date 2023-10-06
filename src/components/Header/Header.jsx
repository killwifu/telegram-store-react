import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useTelegram } from '../../shared/hooks/useTelegram.js';
import Logo from '../../assets/drue-logo.png';

const Header = () => {
  const { onClose, tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  console.log(tg.initDataUnsafe.user);

  return (
    <HeaderRoot>
      <UserNameContainer>
        <UserNameIcon>
          <img src={tg.initDataUnsafe?.user?.photo_url || Logo} alt='user' />
        </UserNameIcon>
        <UserName>{tg.initDataUnsafe?.user?.username || 'Юзернейм'}</UserName>
      </UserNameContainer>
      <LogoWrapper>
        <img src={Logo} alt='Drue' />
      </LogoWrapper>
      <FAQText>
        Как <br /> это работает?
      </FAQText>
    </HeaderRoot>
  );
};

const FAQText = styled('div')`
  color: #000;
  font-family: Ermilov;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const LogoWrapper = styled('div')`
  width: 114px;
  height: 64px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const HeaderRoot = styled('header')`
  padding: 7px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserNameContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 11px;
  background: #5da9e9;
  padding: 8px 4px 8px 8px;
`;

const UserName = styled('span')`
  color: #fff;
  font-family: Ermilov;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const UserNameIcon = styled('span')`
  width: 16px;
  height: 16px;
  background-color: black;
  border-radius: 50%;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default Header;
