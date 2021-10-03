import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Text from '../atoms/Text';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ px: 10 }}>
        <Toolbar sx={{display:'flex', justifyContent: 'flex-end'}} >
            <Box sx={{display: "flex"}}>
                <Text> HOME </Text>
                <Text> ABOUT </Text>
                <Text> PROJECTS </Text>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
