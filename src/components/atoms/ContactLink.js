import React from 'react'
import Link from '@mui/material/Link';

const ContactLink = ({ href = '#', children }) => {
    return (
        <Link href={href} underline='none' color="tertiary.dark" sx={{ ':hover': { color: 'primary.main' }  }}> { children } </Link>
    )
}

export default ContactLink
