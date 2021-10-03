import React from 'react'
import Typography from '@mui/material/Typography';

const Text = ({ children, variant = 'h5', textAlign = 'left', pr = 5 }) => {

    return (
        <>
            <Typography variant={variant} sx={{pr, py: 2, textAlign: textAlign, lineHeight: 1.4 }}  >
             { children }
            </Typography>
        </>
    )
}

export default Text
