import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function SearchBar() {
  return (
    <Box sx={{ width: 700, maxWidth: '100%' }}>
      <TextField fullWidth label="Search Ngrams" id="fullWidth" variant='filled'/>
    </Box>
  );
}