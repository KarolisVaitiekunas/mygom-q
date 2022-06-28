import React, { useEffect, useState } from 'react';
import { DataType } from '../utils/data';
import UseFilterData from '../utils/hooks/UseFilterData';
import DropDownListItem from './DropDownListItem';
import { SectionType } from './types';

interface IDropDownListProps {
  show: boolean;
  handleElements: (element: DataType) => void;
}
const DropDownList: React.FC<IDropDownListProps> = ({ show, handleElements }) => {
  const [sections, setSections] = useState<SectionType>([]);
  const { search, list, handleFilter } = UseFilterData();

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

  return show ? (
    <div>
      <input value={search} onChange={(e) => handleFilter(e.target.value)} />
      <ul>
        {sections.map((section, index) => {
          return <DropDownListItem key={index} handleElements={handleElements} section={section} />;
        })}
      </ul>
    </div>
  ) : (
    <></>
  );
};

export default DropDownList;
