import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Text from '../atoms/Text';
import MyButton from '../atoms/MyButton';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MyCard = ({ img, title, href='#', children }) => {
  return (
    <Box sx={{ pb: 8, pt: 1 }}>
        <Card sx={{ my: 7 }}>
            <CardActionArea href="/">
            <CardMedia
                component="img"
                height="194"
                image={img}
                alt="Paella dish"
                sx={{ height: { xs: 150, md: 200 } }}
            />
            </CardActionArea>
        </Card>

        <Text variant='h5' color={'primary.main'} >{title}</Text>
        <Typography variant='h5' sx={{ mt:2, lineHeight: 1.5 }} >{children}</Typography>
        <MyButton> visit site </MyButton>
    </Box>
  );
}

export default MyCard