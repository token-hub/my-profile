import React from 'react'
import Box from '@mui/material/Box';

const Text = ({ children }) => {

    return (
        <Box>
            <Box sx={{ fontSize: 20, pr: 5, py: 2 }}>{ children }</Box>
        </Box>
    )
}

export default Text
