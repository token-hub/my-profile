import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Text from '../atoms/Text';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from './Drawer';

export default function ButtonAppBar(props) {
  const spacing = {
    px : {
      xs: 0,
      md: 10, 
      xl: 20, 
    }
  }

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  }

  return (
    <>
      <AppBar position="sticky" sx={spacing}>
        <Toolbar sx={{display:'flex', justifyContent: 'flex-end'}} >
          <Box sx={{display: { xs: 'none', md: 'flex' }}}>
              <Text> HOME </Text>
              <Text> ABOUT </Text>
              <Text> PROJECTS </Text>
          </Box>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: {md: 'none' }}}
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
