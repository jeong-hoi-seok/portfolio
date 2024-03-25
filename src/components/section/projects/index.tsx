'use client';
import React from 'react';
//
import { projectData } from './project';
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
                                    className={'relative mb-4'}
                                >
                                    {
                                        d.thumbnail &&
                                            <img src={d.thumbnail} alt="" />
                                    }
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