import React from 'react'
import Box from '@mui/material/Box';
import Appbar from '../organisms/Appbar';
import Contact from '../organisms/Contact';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Base = ({ children }) => {

    return (
        <div id='container'>
            <Appbar/>
            <Element name="test7" className="element" id="containerElement" style={{
                position: 'relative',
            }}>
            <Box sx={{px: {xs: '7%', sm: '10%', md: '15%', xl: '25%'}, py: 5}}>
                    {children}
                <Contact />
            </Box>

          </Element>
       
        </div>
    )
}

export default Base
