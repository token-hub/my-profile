import React from 'react'
import Home from './pages/Home';
import Box from '@mui/system/Box';

const App = () => {
  return (
    <Box sx={{height: '100vh', fontFamily: 'Nunito Sans' }}>
      <Home />

     <Box sx={{fontSize:100}}> Hello</Box>
     <Box sx={{ height: 1000, bgcolor: 'red' }}>2</Box>
    </Box>
  )
}

export default App
