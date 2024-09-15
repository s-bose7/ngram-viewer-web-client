import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/search';
import QueryParameters from './components/query';
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';

function App() {

  const [selectedParams, setSelectedParams] = useState({
    yearStart: '',
    yearEnd: '',
    corpus: '',
    caseInsensitive: false,
  });

  const handleApply = (yearStart, yearEnd, corpus, caseInsensitive) => {
    setSelectedParams({
      yearStart,
      yearEnd,
      corpus,
      caseInsensitive,
    });
  };

  return (
    <>
      <div className="app-container">
        <h2>Google Books Ngram Viewer</h2>
        <div className="search-container">
          <SearchBar />
          <Button 
            variant="outlined" 
            startIcon={<SearchIcon />} 
            sx={{
              height: '50px',
              '& .MuiButton-startIcon': {
                marginRight: '8px'
              }
            }}
          >
            Search
          </Button>
        </div>
        <div className='query-parameters'>
          <QueryParameters onApply={handleApply}/>
        </div>
      </div>
    </>
  );
}

export default App
