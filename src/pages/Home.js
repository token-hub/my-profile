import React from 'react';
import MyAvatarAndGreetings from '../components/molecules/MyAvatarAndGreetings';
import HorizontalLine from '../components/atoms/HorizontalLine';
import About from '../components/organisms/About';
import Projects from '../components/organisms/Projects';

const Home = () => {
    return (
       <>
            <MyAvatarAndGreetings />
            <HorizontalLine />
            <About />
            <HorizontalLine />
            <Projects />
            <HorizontalLine />
       </>
    )
}

export default Home
