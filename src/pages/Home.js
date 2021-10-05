import React from 'react';
import MyAvatarAndGreetings from '../components/molecules/MyAvatarAndGreetings';
import HorizontalLine from '../components/atoms/HorizontalLine';
import About from '../components/organisms/About';
import Projects from '../components/organisms/Projects';
import Base from '../components/layout/Base';

const Home = () => {
    return (
       <Base>
            <MyAvatarAndGreetings />
            <HorizontalLine />
            <About />
            <HorizontalLine />
            <Projects />
            <HorizontalLine />
       </Base>
    )
}

export default Home
