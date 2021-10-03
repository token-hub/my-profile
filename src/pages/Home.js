import Box from '@mui/material/Box';
import React from 'react';
import Text from '../components/atoms/Text';
import Avatar from '@mui/material/Avatar';
import Me from '../assets/images/formal-me-with-trees.jpg';
import Appbar from '../components/organisms/Appbar';

const Home = () => {
    return (
        
        <Appbar/>
        // <Box sx={{ display: "flex"}}>
        //     <Box sx={{flexGrow: 1}}>
        //         <Avatar
        //             alt="John Suyang"
        //             src={Me}
        //             sx={{ width: 100, height: 100 }}
        //         />
        //     </Box>

        //     <Box sx={{ display: "flex", }}>
        //         <Text> Home </Text>
        //         <Text> About </Text>
        //         <Text> Projects </Text>
        //     </Box>
        // </Box>
 
       
    )
}

export default Home
