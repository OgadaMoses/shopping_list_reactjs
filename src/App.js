import AddItem from './AddItem';
import React, {useState} from 'react';
import Container from '@mui/material/Container';
import AppBar  from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Typography  from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
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
    <Stack alignItems="Center">
    <AddItem addItem={addItem}/>
    <List>
      {
        items.map((item, index) =>
        <ListItem key={index} divider>
          <ListItemText 
          primary={item.product}
          secondary={item.amount} />
        </ListItem>
        )
      }
    </List>
    </Stack>
   </Container>
  );
}

export default App;
