import React from 'react'
import Typography from '@mui/material/Typography';

const Text = ({ children, variant = 'h5', textAlign = 'left', pr = 0, ...props }) => {

    return (
        <>
            <Typography {...props} variant={variant} sx={{pr, py: 2, textAlign: textAlign, lineHeight: 1.5 }}  >
             { children }
            </Typography>
        </>
    )
}

export default Text
