import React from 'react';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { DataType } from '../utils/data';
import { ActiveType } from './types';

export const Root = styled.div<ActiveType>`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
  overflow-x: auto;
  transition: opacity 0.3s;
  opacity: ${({ show }: { show: boolean }) => (show ? 1 : 0)};
`;

export const SelectedElement = styled.p`
  white-space: nowrap;
  margin: 2px;
  padding: 2px;
  background-color: ${themeGet('colors.primary')};
  color: #fff;
  font-size: ${themeGet('fontSizes.extraSmall')}px;
  font-weight: bold;
  border-radius: 2px;
`;

type DropdownSelectionsPropsType = {
  selectedElements: Array<DataType>;
  show: boolean;
};

const DropdownSelections: React.FC<DropdownSelectionsPropsType> = ({ selectedElements, show }) => {
  return (
    <Root show={show} data-testid='dropdown-selection'>
      {selectedElements.length > 0 ? (
        selectedElements.map((element, index) => (
          <SelectedElement key={index} data-testid='dropdown-selection-item'>
            {element.name}
          </SelectedElement>
        ))
      ) : (
        <h5 style={{ margin: '0 auto 0 auto' }}>No elements selected</h5>
      )}
    </Root>
  );
};

export default DropdownSelections;
