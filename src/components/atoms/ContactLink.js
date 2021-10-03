import React from 'react'
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
const ContactLink = ({ href = '#', children }) => {
    return (
     <Box>
           <Link href={href} underline='none' color="tertiary.dark" sx={{ ':hover': { color: 'primary.main' }  }}> { children } </Link>
     </Box>
    )
}

export default ContactLink
