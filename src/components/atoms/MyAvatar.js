import React from 'react'
import Avatar from '@mui/material/Avatar';
import Me from '../../assets/images/formal-me-with-trees.jpg';

const MyAvatar = () => {
    return (
       <>
            <Avatar
                alt="John Suyang"
                src={Me}
                sx={{ width: 200, height: 200, mb: 5}}
            />
       </>
    )
}

export default MyAvatar
