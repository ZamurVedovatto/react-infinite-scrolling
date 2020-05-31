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

  UseBookSearch(query, pageNumber);

  return (
    <div className="App">
      <input type="text" onChange={handleSearch} />
      <span>Title</span>
      <span>Loading...</span>
      <span>Error</span>
    </div>
  );
}

export default App;
