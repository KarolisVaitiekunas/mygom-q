import { useState } from 'react';
import styled from 'styled-components';
import DropdownButton from './DropdownButton';
import DropDownList from './DropDownList';
import DropdownSelections from './DropdownSelections';
import UseListVisibility from '../utils/hooks/UseListVisibility';
import { DataType } from '../utils/data';

export const Root = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  position: relative;
  width: 300px;
  max-width: 300px;
`;

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
    <Root ref={DropDownListRef}>
      <DropdownButton handleDropDownVisibility={handleDropDownVisibility} />
      <DropdownSelections show={show} selectedElements={selectedElements} />
      <DropDownList show={show} handleElements={handleElements} />
    </Root>
  );
};

export default Dropdown;
