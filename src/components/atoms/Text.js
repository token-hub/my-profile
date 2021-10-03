import React from 'react'
import Typography from '@mui/material/Typography';

const Text = ({ children, variant = 'h5', textAlign = 'left' }) => {

    return (
        <>
            <Typography variant={variant} sx={{ pr: 5, py: 2, textAlign: textAlign, lineHeight: 1.4 }}  >
             { children }
            </Typography>
        </>
    )
}

export default Text
