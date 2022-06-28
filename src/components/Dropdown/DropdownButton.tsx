import themeGet from '@styled-system/theme-get';
import React from 'react';
import styled from 'styled-components';

export const Root = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 50%;
  border: none;
  border-radius: 3px;
  background-color: ${themeGet('colors.primary')};
  cursor: pointer;
`;

interface IDropdownButtonProps {
  handleDropDownVisibility: () => void;
}
const DropdownButton: React.FC<IDropdownButtonProps> = ({ handleDropDownVisibility }) => {
  return <Root onClick={handleDropDownVisibility}>DROPDOWN</Root>;
};

export default DropdownButton;
