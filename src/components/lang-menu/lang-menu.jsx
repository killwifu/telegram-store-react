import { styled } from '@mui/system';
import { useState } from 'react';

const LanguageBar = () => {
  const [open, setOpen] = useState(false);
  const [currentItems, setCurrentItems] = useState(['Russian', 'Spanish', 'French', 'Polka']);
  const [currentLanguage, setCurrentLanguage] = useState('English');

  const setCurrentItemsHandler = (index) => {
    setCurrentItems((prevItems) => [...prevItems.filter((item) => item !== prevItems[index]), currentLanguage]);
    setCurrentLanguage(currentItems[index]);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Label onClick={() => setOpen(!open)}>{currentLanguage}</Label>
      {open && (
        <Menu>
          {currentItems.map((item, index) => {
            return (
              <MenuItem key={index} onClick={() => setCurrentItemsHandler(index)}>
                {item}
              </MenuItem>
            );
          })}
        </Menu>
      )}
    </div>
  );
};

const Label = styled('button')`
  border-radius: 50px;
  border: 1px solid rgba(189, 189, 189, 0.2);
  padding: 17px 30px 16px 43px;
  background-color: transparent;
  cursor: pointer;
  color: #828282;
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 400;
  line-height: 143%; /* 22.88px */
  letter-spacing: -0.48px;
  display: flex;
  gap: 23px;
  align-items: center;
  position: relative;
`;

const Menu = styled('div')`
  padding: 10px;
  position: absolute;
  top: 40px;
  color: black;
  border-radius: 11px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 2px solid #828282;
  left: 0;
  right: 0;
`;

const MenuItem = styled('button')`
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 400;
  line-height: 143%; /* 22.88px */
  letter-spacing: -0.48px;
  background-color: transparent;
  padding: 0;
  border: none;
  color: #828282;
  cursor: pointer;
`;

export default LanguageBar;
