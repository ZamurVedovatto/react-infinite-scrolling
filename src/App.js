import React, { useState } from 'react';
import './App.css';
import UseBookSearch from './components/UseBookSearch';

function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  const {
    books,
    hasMore,
    loading,
    error
  } = UseBookSearch(query, pageNumber);

  return (
    <div className="App">
      <input type="text" onChange={handleSearch} />
      {books.map(book => {
        return <div key={book}>{book}</div>
      })}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    </div>
  );
}

export default App;
