import './App.css'
import SearchBar from './components/search'
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import { auto } from '@popperjs/core';

function App() {
  return (
    <>
      <div className="app-container">
        <h1>Ngram Viewer</h1>
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
        <div>
          <Button
            variant="outlined"
            sx={{
              marginTop: 2,
              padding: '5px 12px'
            }}
          >
            Case-Insensitive
          </Button>
        </div>
      </div>
    </>
  );
}

export default App
