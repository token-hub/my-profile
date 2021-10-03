import React from 'react'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Text from './Text';
import Me from '../../assets/images/formal-me-with-trees.jpg';
import PanToolIcon from '@mui/icons-material/PanTool';

const MyAvatar = () => {
    return (
       <>
            <Avatar
                alt="John Suyang"
                src={Me}
                sx={{ width: 200, height: 200, mb: 5 }}
            />
       </>
    )
}

export default MyAvatar
