import React from 'react'
import Typography from '@mui/material/Typography';

const Text = ({ children }) => {

    return (
        <>
            <Typography variant='h5' sx={{ pr: 5, py: 2 }} >
             { children }
            </Typography>
        </>
    )
}

export default Text
