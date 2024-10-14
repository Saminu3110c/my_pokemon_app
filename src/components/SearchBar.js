import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={term}
      onChange={handleChange}
      placeholder="Search Pokémon..."
      className="search-bar"
    />
  );
};

export default SearchBar;