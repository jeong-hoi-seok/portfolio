//componetns
import React from 'react';
//section
import Intro from '@/components/section/Intro';
import About from '@/components/section/About';
import Projects from '@/components/section/projects';
import Contact from '@/components/section/Contact';
//components
import DustEffect from '@/components/DustEffect';

const Home = () => 
{
    return (
        <React.Fragment>
            <Intro/>
            <About/>
            <Projects/>
            <Contact/>
            <DustEffect
                particle={170}
                MinSpeed={100}
                MaxSpeed={400}
                particleMinSize={0.2}
                particleMaxSize={0.7}
                className='fixed top-0 left-0 pointer-events-none block w-full h-full'
                style={{
                    zIndex: '-1',
                }}
            />
        </React.Fragment>
    );
};

export default Home;