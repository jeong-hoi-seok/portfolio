'use client';
import React from 'react';
import Image from 'next/image';
//json
import { skillData } from './skill';
//swiper
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


const Skills = () => 
{
    return (
        <div className='jhs-acrylic-box aspect-square lg:aspect-auto lg:h-64 xl:h-72 2xl:h-96'>
            <Swiper
                autoplay={{
                    delay: 2000,
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
                                className='p-4'
                            >
                                <figure className='relative flex flex-col justify-center items-center h-full'>
                                    <div className='relative flex justify-center items-center w-1/2 aspect-square min-w-14 min-h-14'>
                                        {
                                            d.logo &&
                                                <Image
                                                    src={d.logo}
                                                    alt={d.name}
                                                    fill
                                                    sizes='width: 100%'
                                                />
                                        }
                                    </div>
                                    <figcaption className='absolute text-md lg:text-lg top-0 left-0 text-zinc-400'>
                                        {d.name}
                                    </figcaption>
                                </figure>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </div>
    );
};

export default Skills;