import React from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import resume from '../../assets/pdf/John-Suyang-Resume-two-columns.pdf';

const Contact = () => {

   const pdfStyle = {
      color: "#918e8e",
      textDecoration: 'none'
   }

   const CustomTooltip = styled(({ className, ...props }) => (
      <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
      [`& .${tooltipClasses.tooltip}`]: {
        fontSize: 20,
      },
    }));

    return (
       <Box sx={{ display: 'flex', justifyContent: 'center', fontSize: 20, pb: 15}}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: {xs: 250, sm: 300} }}>
            <CustomTooltip title="johnsuyang2118@gmail.com" >
               <Link underline='none' sx={{ cursor: 'pointer' }} color="tertiary.dark"> Email </Link>
            </CustomTooltip>
            <a href={resume} style={pdfStyle} target="_blank" rel="noopener noreferrer" download>   
               Resume  
            </a>
            <Link 
               href="https://johnsuyang.jobs180.com/" 
               underline='none' 
               sx={{ cursor: 'pointer' }} 
               color="tertiary.dark"
               target='_blank'
            >
               ResumeLink 
            </Link>
          </Box>
       </Box>
    )
}

export default Contact
