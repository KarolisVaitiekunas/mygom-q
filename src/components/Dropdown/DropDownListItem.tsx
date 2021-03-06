import React, { memo } from 'react';
import { DataType } from '../utils/data';
import { SectionType } from './types';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';

const Section = styled.li`
  padding: 2px;
`;

const SectionHeader = styled.p`
  font-size: ${themeGet('fontSizes.large')}px;
  font-weight: bold;
  text-transform: uppercase;
`;

const SectionText = styled.p`
  font-size: ${themeGet('fontSizes.large')}px;
  cursor: pointer;
  transition: background 0.3s ease-in;
  &:hover {
    background-color: ${themeGet('colors.primary')};
  }
`;

type DropDownListItemPropsType = {
  handleElements: (element: DataType) => void;
  section: SectionType[0];
};
const DropDownListItem: React.FC<DropDownListItemPropsType> = ({ handleElements, section }) => {
  return (
    <Section>
      <SectionHeader>{section.section}</SectionHeader>
      {section.elements.map((element, index) => {
        return (
          <SectionText key={index} onClick={() => handleElements(element)} data-testid='dropdown-list-item'>
            {element.name}
          </SectionText>
        );
      })}
    </Section>
  );
};

export default memo(DropDownListItem);
