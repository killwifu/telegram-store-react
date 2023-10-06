import React, { useState } from 'react';
import { alpha, styled } from '@mui/system';

const Switch = () => {
  const [on, setOn] = useState(false);

  return (
    <>
      <SwitchRoot type='checkbox' id={'react-switch-new'} active={true} />
      <Label active={on} onClick={() => setOn(!on)}>
        <Dot active={on} />
      </Label>
    </>
  );
};

const SwitchRoot = styled('input')`
  height: 0;
  width: 0;
  visibility: hidden;
  cursor: pointer;
`;

const Label = styled('label')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 39px;
  height: 22px;
  background: ${alpha('#6FCF97', 0.2)};
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
`;

const Dot = styled('span')`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 22px;
  height: 22px;
  border-radius: 45px;
  transition: 0.2s;
  background: #6fcf97;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

  ${({ active }) =>
    active
      ? `  left: calc(100% - 2px);
  transform: translateX(-100%);`
      : ``};
`;

export default Switch;
