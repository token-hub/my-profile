import React from 'react'
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
const ContactLink = ({ href = '#', children, ...props }) => {
   
    return (
       <>
         <Link href={href} {...props} variant='h5' underline='none' color="primary.main" sx={{ ':hover': {color: 'primary.main'}, my: 30  }}> { children } </Link>
       </>
    )
}

export default ContactLink
