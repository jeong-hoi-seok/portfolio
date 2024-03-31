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
                className='columns-3'
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
                                    className={'jhs-acrylic-box mb-4 p-4 pb-8 break-inside-avoid'}
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
                                        <h6 className='mb-1 font-bold tracking-tight'>
                                            {d.project}
                                        </h6>
                                        <TextEffect
                                            text={d.date}
                                            delay={30}
                                            className='mb-4 text-xs text-slate-400'
                                        />
                                        <p
                                            className='text-slate-200 break-keep'
                                        >
                                            {d.description}
                                        </p>
                                        <ul className='grid mt-5 gap-1'>
                                            {
                                                d.detail.map((dd,ii) => 
                                                {
                                                    return (
                                                        <li
                                                            key={ii}
                                                            className='flex'
                                                        >
                                                            <p className='mr-1'>- </p>
                                                            <p className='text-sm break-keep text-slate-200'>
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