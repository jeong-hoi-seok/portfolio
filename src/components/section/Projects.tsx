'use client';
import React from 'react';
//
import Container from '@/components/layout/Container';
//swiper
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const Projects = () => 
{
    return (
        <Container
            title='프로젝트'
            subTitle='Projects'
        >
            <Swiper
                slidesPerView={3}
                spaceBetween={16}
                className='mt-8'
                navigation={true}
                modules={[Navigation]}
            >
                {
                    Array.from({length: 8}).map((_,i) => 
                    {
                        return (
                            <SwiperSlide
                                key={i}
                                className='relative aspect-[4/3] acrylic-box'
                            >
                                {i + 1}
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </Container>
    );
};

export default Projects;