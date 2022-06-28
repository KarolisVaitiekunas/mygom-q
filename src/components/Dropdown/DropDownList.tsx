import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import DropDownListItem from './DropDownListItem';
import UseFilterData from '../utils/hooks/UseFilterData';
import { DataType } from '../utils/data';
import { ActiveType, SectionType } from './types';

export const Root = styled.div<ActiveType>`
  transition: opacity 0.3s;
  opacity: ${({ show }: ActiveType) => (show ? 1 : 0)};
`;

export const DropdownInput = styled.input`
  margin-top: 10px;
  border: none;
  border-bottom: 2px solid ${themeGet('colors.primary')};

  &:focus {
    outline: none;
  }
`;

export const List = styled.ul`
  max-height: 200px;
  overflow: auto;
`;

type DropDownListPropsType = {
  show: boolean;
  handleElements: (element: DataType) => void;
};
const DropDownList: React.FC<DropDownListPropsType> = ({ show, handleElements }) => {
  const [sections, setSections] = useState<SectionType>([]);
  const { search, list, handleInputSearch, handleFilter } = UseFilterData();

  useEffect(() => {
    // manage sections
    const newSections: SectionType = [];
    list.map((element) => {
      // initial section state will be empty, push so it wouldn't be
      if (newSections.length <= 0) {
        newSections.push({ section: element.type, elements: [element] });
      } else {
        // if does not have section, push one. If has section, push into elements
        const doesNotHaveSection = newSections.every((section) => section.section !== element.type);
        if (doesNotHaveSection) {
          newSections.push({ section: element.type, elements: [element] });
        } else {
          newSections.map((section) => {
            if (section.section === element.type) {
              section.elements.push(element);
            }
          });
        }
      }
    });

    setSections(newSections);
  }, [list]);

  return (
    <Root show={show}>
      <DropdownInput
        placeholder='Search here...'
        value={search}
        onSelect={handleFilter}
        onChange={(e) => handleInputSearch(e.target.value)}
      />
      <List data-testid='dropdown-list'>
        {sections.map((section, index) => (
          <DropDownListItem key={index} handleElements={handleElements} section={section} />
        ))}
      </List>
    </Root>
  );
};

export default DropDownList;
