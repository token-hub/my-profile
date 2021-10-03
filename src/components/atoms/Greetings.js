import React from 'react'
import Text from './Text';
import PanToolIcon from '@mui/icons-material/PanTool';

const Greetings = () => {
    return (
       <>
       
          <Text variant='h3' pr='0' textAlign='center'> 
                Hello, I am John Suyang,  a Web Developer based in the Philippines.  
                <PanToolIcon fontSize="large" sx={{ color: '#e2d348' }} /> 
            </Text>
       </>
    )
}
// md h3, sm h4
export default Greetings
