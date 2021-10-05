import React from 'react'
import Box from '@mui/material/Box';
import Appbar from '../organisms/Appbar';
import Contact from '../organisms/Contact';

const Base = ({ children }) => {

    return (
        <>
        <Appbar/>
        <Box sx={{px: {xs: '7%', sm: '10%', md: '15%', xl: '25%'}, py: 5}}>
                {children}
            <Contact />
        </Box>
        </>
    )
}

export default Base
