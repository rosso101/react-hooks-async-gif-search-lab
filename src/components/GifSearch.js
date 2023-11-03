import React, { useState } from 'react';

function GifSearch({ onSearchSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GIFs..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default GifSearch;