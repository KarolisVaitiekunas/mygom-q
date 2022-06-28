import { useState } from 'react';
import { DataType } from '../utils/data';
import UseListVisibility from '../utils/hooks/UseListVisibility';
import DropdownButton from './DropdownButton';
import DropDownList from './DropDownList';
import DropdownSelections from './DropdownSelections';

const Dropdown: React.FC = () => {
  const [selectedElements, setSelectedElements] = useState<DataType[]>([]);
  const handleElements = (element: DataType) => {
    if (selectedElements.includes(element)) {
      setSelectedElements((state) => state.filter((stateEl) => stateEl !== element));
    } else {
      setSelectedElements((state) => [...state, element]);
    }
  };

  const { show, DropDownListRef, handleDropDownVisibility } = UseListVisibility();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid red',
        marginTop: '5px',
      }}
      ref={DropDownListRef}
    >
      <DropdownButton handleDropDownVisibility={handleDropDownVisibility} />
      <DropdownSelections selectedElements={selectedElements} />
      <DropDownList show={show} handleElements={handleElements} />
    </div>
  );
};

export default Dropdown;
