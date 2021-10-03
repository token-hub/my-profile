import React from 'react'
import Box from '@mui/material/Box';

const Base = ({ children }) => {
    return (
        <Box sx={{ px: 20, py: 5 }}>
            {children}
        </Box>
    )
}

export default Base
