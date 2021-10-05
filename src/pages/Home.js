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
            <HorizontalLine id='about' />
            <About />
            <HorizontalLine id='projects' />
            <Projects />
            <HorizontalLine />
       </Base>
    )
}

export default Home
