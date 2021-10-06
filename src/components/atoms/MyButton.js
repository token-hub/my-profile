import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const MyButton = ({ children }) => {
    return (
       <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button 
                variant='contained'
                size='large' 
                sx={{ borderRadius: '50px', fontWeight: 'heavy', fontSize: 20, py: 1.5, px: 4, mt: 4 }}
            >
                {children}
            </Button>
       </Box>
    )
}

export default MyButton
