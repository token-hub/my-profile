import React from 'react'
import Home from './pages/Home';
import Box from '@mui/system/Box';
import Appbar from './components/organisms/Appbar';
import Base from './components/templates/Base';
import Contact from './components/organisms/Contact';

const App = () => {
  return (
    <Box sx={{height: 'auto', fontFamily: 'Nunito Sans', position: 'relative'}}>
      <Appbar/>
      <Base>
        <Home />
      </Base>
      <Contact />
    </Box>
  )
}

export default App
