'use client';
import React from 'react';
//
import Container from '@/components/layout/Container';
//swiper
import 'swiper/css';
import 'swiper/css/navigation';

const projects = [
    {
        project: 'media solution',
    },
    {
        project: 'babayo',
        thumbnail: '/images/project/babayo.jpg',
    },
    {
        project: '블랙 클로버 모바일',
        thumbnail: '/images/project/blackclover.png',
    },
    {
        project: 'babayo',
    },
    {
        project: 'babayo',
    },
    {
        project: 'babayo',
    },
];

const Projects = () => 
{
    return (
        <Container
            title='프로젝트'
            subTitle='Projects'
        >
            <div
                className='columns-4 mt-8'
            >
                {
                    projects.map((d,i) => 
                    {
                        return (
                            <div
                                key={i}
                                className={'relative acrylic-box mb-4'}
                            >
                                {
                                    d.thumbnail &&
                                        <img src={d.thumbnail} alt="" />
                                }
                                {d.project}
                            </div>
                        );
                    })
                }
            </div>
        </Container>
    );
};

export default Projects;