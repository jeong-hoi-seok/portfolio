'use client';
import React from 'react';
//
import { projectData } from './projectData';
//
import Container from '@/components/layout/Container';
import ScrollAnimation from '@/components/ScrollAnimation';
import TextEffect from '@/components/TextEffect';

const Projects = () => 
{
    return (
        <Container
            title='Projects' 
            subTitle='프로젝트'
        >
            <div
                className='columns-1 sm:columns-2 lg:columns-3'
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
                                    className={'jhs-acrylic-box mb-3 sm:mb-4 p-4 pb-8 break-inside-avoid'}
                                >
                                    {
                                        d.thumbnail &&
                                            <div className='relative mb-4 rounded-lg overflow-hidden'>
                                                <img
                                                    src={d.thumbnail}
                                                    alt={d.project}
                                                    className='w-full object-contain'
                                                />
                                            </div>
                                    }
                                    <div>
                                        <h6 className='mb-1 font-bold tracking-tight'>
                                            {d.project}
                                        </h6>
                                        <TextEffect
                                            text={d.date}
                                            delay={30}
                                            className='mb-4 text-xs text-slate-400'
                                        />
                                        <p
                                            className='break-keep text-slate-200'
                                        >
                                            {d.description}
                                        </p>
                                        <ul className='grid mt-4 sm:mt-5 gap-1'>
                                            {
                                                d.detail.map((dd,ii) => 
                                                {
                                                    return (
                                                        <li
                                                            key={ii}
                                                            className='flex'
                                                        >
                                                            <p className='mr-1 lg:text-sm'>- </p>
                                                            <p className='lg:text-sm break-keep text-slate-200'>
                                                                {dd}
                                                            </p>
                                                        </li>
                                                    );
                                                })
                                            }
                                        </ul>
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