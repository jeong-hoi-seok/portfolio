import React from 'react';
import Image from 'next/image';
//
import Container from '@/components/layout/Container';
import ScrollAnimation from '../ScrollAnimation';

const About = () => 
{
    return (
        <Container>
            <ScrollAnimation
                delay={200}
            >
                <h3 className='text-1xl font-bold mb-1'>
                    About Me
                </h3>
            </ScrollAnimation>
            <ScrollAnimation>
                <h2 className='text-3xl'>
                    저를 소개합니다!
                </h2>
            </ScrollAnimation>
            <div className='mt-12'>
                <ScrollAnimation>
                    <div className='relative w-44 h-44 bg-slate-600 rounded-full overflow-hidden'>
                        <Image
                            src={'/images/profile.jpg'}
                            alt='my profile'
                            fill
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </ScrollAnimation>
            </div>
        </Container>
    );
};

export default About;