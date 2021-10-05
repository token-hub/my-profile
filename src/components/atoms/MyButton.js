import React from 'react'
import Button from '@mui/material/Button';

const MyButton = ({ text }) => {
    return (
       <>
            <Button 
                variant='contained'
                size='large' 
                sx={{ borderRadius: '50px', fontWeight: 'heavy', fontSize: 20, py: 1.5, px: 4, 
                    ':hover': { border: 2, borderColor: 'primary.main', bgcolor: 'white', color: 'primary.main' }
                }}
            >
                {text}
            </Button>
       </>
    )
}

export default MyButton
