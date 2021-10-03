import React from 'react'
import Text from './Text';
import PanToolIcon from '@mui/icons-material/PanTool';

const Greetings = () => {
    return (
       <>
          <Text variant='h3' textAlign='center'> 
                Hello, I am John Suyang,  a Web Developer <br /> based in the Philippines.  
                <PanToolIcon fontSize="large" sx={{ color: '#e2d348' }} /> 
            </Text>
       </>
    )
}

export default Greetings
