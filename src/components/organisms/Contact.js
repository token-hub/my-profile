import React from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ContactLink from '../atoms/ContactLink';

const Contact = () => {
    return (
       <Box sx={{ display: 'flex', justifyContent: 'center', fontSize: 20, pb: 15}}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: {xs: 250, sm: 300} }}>
            <ContactLink color="tertiary.dark"> Facebook </ContactLink>
            <ContactLink color="tertiary.dark"> Email </ContactLink>
            <ContactLink color="tertiary.dark"> Resume </ContactLink>
          </Box>
       </Box>
    )
}

export default Contact
