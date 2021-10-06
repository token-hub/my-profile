import React from 'react'
import Box from '@mui/material/Box';
import Appbar from '../organisms/Appbar';
import Contact from '../organisms/Contact';
import {Element} from 'react-scroll'

const Base = ({ children }) => {
    return (
        <Box id='container' sx={{ fontFamily: 'Rubik' }}>
            <Appbar/>
            <Element name="test7" className="element" id="containerElement" style={{
                position: 'relative',
            }}>
            <Box sx={{px: {xs: '7%', sm: '10%', md: '15%', xl: '25%'}, py: 5}}>
                {children}
                <Contact />
            </Box>
          </Element>
        </Box>
    )
}

export default Base
