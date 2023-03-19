import AddItem from './AddItem';
import React, {useState} from 'react';
import Container from '@mui/material/Container';
import AppBar  from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Typography  from '@mui/material/Typography';
import './App.css';





function App() {
const [items, setItems] = useState([]);
const addItem = (item) => {setItems([item, ...items])};
  return (
   <Container>
    <AppBar position="static">
      <ToolBar>
        <Typography variant="he">
          Shopping List
        </Typography>
      </ToolBar>
    </AppBar>
    <AddItem addItem={addItem}/>
   </Container>
  );
}

export default App;
