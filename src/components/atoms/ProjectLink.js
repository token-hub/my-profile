import React from 'react'
import Link from '@mui/material/Link';
const ContactLink = ({href = '#', children }) => {
   
    return (
       <>
         <Link href={href} variant='h5' underline='none' color="primary.main" sx={{ ':hover': {color: 'primary.main'}, my: 30  }}> { children } </Link>
       </>
    )
}

export default ContactLink
