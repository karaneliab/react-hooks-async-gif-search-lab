
import React, { useState } from 'react';

function GifSearch({ onFormSubmit }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for GIFs"
      />
      <button type="submit">Search GIFs</button>
    </form>
  );
}

export default GifSearch;
