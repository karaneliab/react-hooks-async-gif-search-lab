
import React, { useState } from 'react';

function GifSearch({ onFormSubmit }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(search);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className='form-group'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for GIFs"
      />
      <button type="submit" className='btn btn-success'>Search GIFs</button>
    </form>
    </div>
  );
}

export default GifSearch;
