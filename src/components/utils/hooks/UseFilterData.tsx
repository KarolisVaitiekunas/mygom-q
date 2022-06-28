import { useState } from 'react';
import data from '../data';

const UseFilterData = () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState(data);

  const handleFilter = () => {
    const cleanSearch = search.trim().toLowerCase();
    setList(data.filter((element) => element.name.trim().toLocaleLowerCase().includes(cleanSearch)));
  };

  const handleInputSearch = (searchInput: string) => {
    setSearch(searchInput);
  };

  return { search, handleInputSearch, handleFilter, list };
};

export default UseFilterData;
