import React from 'react';

interface IDropdownSelectionsProps {
  selectedElements:
    | {
        name: string;
        type: string;
      }[];
}

const DropdownSelections: React.FC<IDropdownSelectionsProps> = ({ selectedElements }) => {
  return (
    <div>
      {selectedElements.length > 0 ? (
        selectedElements.map((element, index) => <h5 key={index}>{element.name}</h5>)
      ) : (
        <h5>No elements selected</h5>
      )}
    </div>
  );
};

export default DropdownSelections;
