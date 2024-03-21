'use client';
import React from 'react';
//json
import { skillData } from './skill';
//swiper
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


const Skills = () => 
{
    return (
        <div className='relative h-96 rounded-lg border border-slate-50/10 bg-slate-50/5 after:absolute after:h-px after:top-0 after:w-full after:jhs-bg-gradient-to-r-glitter'>
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className='h-full'
            >
                {
                    skillData.map((d,i) => 
                    {
                        return (
                            <SwiperSlide
                                key={i}
                            >
                                <div className='flex justify-center items-center h-full'>
                                    {d.name}
                                </div>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </div>
    );
};

export default Skills;