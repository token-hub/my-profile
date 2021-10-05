import React from 'react'
import Heading from '../atoms/Heading';
import me from '../../assets/images/formal-me-with-trees.jpg';
import Card from '../molecules/Card';

const Projects = () => {
    return (
        <>
            <Heading> PROJECTS </Heading>
            <Card title='Amazing Title here' img={me}> 
                 Amazing Description here too. Amazing Description here too. Amazing Description here too. Amazing Description here too.Amazing Description here too. Amazing Description here too.'
            </Card>
            <Card title='Amazing Title here' img={me}> 
                 Amazing Description here too. Amazing Description here too. Amazing Description here too. Amazing Description here too.Amazing Description here too. Amazing Description here too.'
            </Card>
            <Card title='Amazing Title here' img={me}> 
                 Amazing Description here too. Amazing Description here too. Amazing Description here too. Amazing Description here too.Amazing Description here too. Amazing Description here too.'
            </Card>
        </>
    )
}

export default Projects
