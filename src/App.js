import React from 'react'
import Home from './pages/Home';
import Box from '@mui/system/Box';
import Appbar from './components/organisms/Appbar';
import Base from './components/templates/Base';


const App = () => {
  return (
    <Box sx={{height: '100vh', fontFamily: 'Nunito Sans', position: 'relative' }}>
      <Appbar/>
      <Base>
        <Home />
      </Base>
    </Box>
  )
}

export default App
