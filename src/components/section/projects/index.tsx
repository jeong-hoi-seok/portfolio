'use client';
import React from 'react';
//
import { projectData } from './projectData';
//
import Container from '@/components/layout/Container';
import ScrollAnimation from '@/components/ScrollAnimation';

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
                    projectData.map((d,i) => 
                    {
                        return (
                            <ScrollAnimation
                                key={i}
                                delay={100 * i}
                                threshold={0.3}
                            >
                                <div
                                    className={'relative mb-4 acrylic-box p-4'}
                                >
                                    {
                                        d.thumbnail &&
                                            <div className='relative mb-4 rounded-lg overflow-hidden'>
                                                <img
                                                    src={d.thumbnail}
                                                    alt={d.project}
                                                />
                                            </div>
                                    }
                                    <div>
                                        <h3 className=''>
                                            {d.project}
                                        </h3>
                                        <p className='mt-1 text-xs text-gray-400'>
                                            {d.date}
                                        </p>
                                        <p className='text-slate-300 text-sm mt-1'>
                                            {d.description}
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        );
                    })
                }
            </div>
        </Container>
    );
};

export default Projects;