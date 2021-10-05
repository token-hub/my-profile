import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Text from '../atoms/Text';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from './Drawer';

const Appbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  }

  return (
    <>
      <AppBar position="sticky" sx={{ px: { md: '8%' ,lg: '14%' }  }}>
        <Toolbar sx={{display:'flex', justifyContent: 'flex-end'}} >
          <Box sx={{display: { xs: 'none', md: 'flex' }}}>
              <Text pr={5}> HOME </Text>
              <Text pr={5}> ABOUT </Text>
              <Text > PROJECTS </Text>
          </Box>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{display: {md: 'none' }}}
            onClick={ toggleDrawer }
          >
            <MenuIcon />
          </IconButton>
          <Drawer isOpen={open} toggleDrawer={toggleDrawer}  />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Appbar;