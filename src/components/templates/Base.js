import React from 'react'
import Box from '@mui/material/Box';


const Base = ({ children }) => {

    return (
        <Box sx={{px: {xs: '7%', sm: '10%', md: '15%'}, py: 5}}>
            {children}
        </Box>
    )
}

export default Base
