import React, {useState} from 'react'
import {Link} from 'react-scroll';
import Box from '@mui/material/Box';

const ContactLink = ({href = '#', children }) => {
  
  const [isHover, setIsHover] = useState(false);

  const color = isHover ? 'yellow' : 'white';

  const mouseOver = () => {
    setIsHover(true);
  }

  const mouseOut = () => {
    setIsHover(false);
  }

  const style = { 
    color, 
    paddingRight: 17,
    cursor: 'pointer',
    fontSize: 22,
    // "&:hover": {
    //   background: "#efefef"
    // }
  };

    return (
       <Box>
         <Link 
          activeClass="active"
          to={href} 
          spy={true} 
          smooth={true} 
          offset={-120} 
          duration={500}  
          underline='none'
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          style={style}> 
          { children } </Link>
       </Box>
    )
}

export default ContactLink
