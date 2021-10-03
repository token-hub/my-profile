import React from 'react'
import Box from '@mui/material/Box';
import MyAvatar from '../atoms/MyAvatar';
import Greetings from '../atoms/Greetings';

const MyAvatarAndGreetings = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'column'}}>
            <MyAvatar />
            <Greetings />
        </Box>
    )
}

export default MyAvatarAndGreetings
