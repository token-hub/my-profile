import React from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Drawer = ({ isOpen, toggleDrawer }) => {

  const list = () => (
    <Box
      sx={{ width: 'auto'}}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List sx={{ display: 'block'}}>
        {['HOME', 'ABOUT', 'PROJECTS'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} sx={{ textAlign:'center', py: 2 }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
        <SwipeableDrawer
            anchor='top'
            open={isOpen}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
        >
            {list()}
        </SwipeableDrawer>
    </>
  );
}

export default Drawer