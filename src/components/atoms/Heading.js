import React from 'react'
import Typography from '@mui/material/Typography';

const Heading = ({ children }) => {
    return (
        <Typography 
            variant='h4' 
            sx={{ 
                fontWeight: 'bold',
                color: 'primary.main',
                textAlign: 'center',
                mb: 5
            }} 
        > 
            {children} 
        </Typography>
    )
}

export default Heading
