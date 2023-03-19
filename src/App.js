import React, {useState} from 'react';
import Container from '@mui/material/Container';
import AppBar  from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Typography  from '@mui/material/Typography';
import './App.css';

function App() {
  return (
   <Container>
    <AppBar position="static">
      <ToolBar>
        <Typography variant="he">
          Shopping List
        </Typography>
      </ToolBar>
    </AppBar>
   </Container>
  );
}

export default App;
