import { useState } from 'react';
import data from '../data';

const UseFilterData = () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState(data);

  const handleFilter = (searchInput: string) => {
    setSearch(searchInput);
    const cleanSearch = searchInput.trim().toLowerCase();
    setList(data.filter((element) => element.name.trim().toLocaleLowerCase().includes(cleanSearch)));
  };

  return { search, handleFilter, list };
};

export default UseFilterData;
