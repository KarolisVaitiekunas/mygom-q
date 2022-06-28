import React from 'react';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';

export const Root = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  border: none;
  border-radius: 3px;
  background-color: ${themeGet('colors.primary')};
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

type DropdownButtonPropsType = {
  handleDropDownVisibility: () => void;
};
const DropdownButton: React.FC<DropdownButtonPropsType> = ({ handleDropDownVisibility }) => {
  return (
    <Root onClick={handleDropDownVisibility} data-testid='dropdown-button'>
      DROPDOWN
    </Root>
  );
};

export default DropdownButton;
