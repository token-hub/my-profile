import React from 'react'
import Typography from '@mui/material/Typography';

const Heading = ({ children, ...props }) => {
    return (
        <Typography 
            {...props}
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
