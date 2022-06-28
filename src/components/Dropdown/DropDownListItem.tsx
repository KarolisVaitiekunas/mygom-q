import React from 'react';
import { DataType } from '../utils/data';
import { SectionType } from './types';

interface IDropDownListItemProps {
  handleElements: (element: DataType) => void;
  section: SectionType[0];
}
const DropDownListItem: React.FC<IDropDownListItemProps> = ({ handleElements, section }) => {
  return (
    <>
      <h3>{section.section}</h3>
      {section.elements.map((element, index) => {
        return (
          <h4 key={index} onClick={() => handleElements(element)}>
            {element.name}
          </h4>
        );
      })}
    </>
  );
};

export default DropDownListItem;
