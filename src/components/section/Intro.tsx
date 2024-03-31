'use client';
import React from 'react';
import moment from 'moment';
import 'moment/locale/ko';
//
import ScrollAnimation from '@/components/ScrollAnimation';
import TextEffect from '../TextEffect';

const Intro = () => 
{
    const trumanShow = () => 
    {
        const hour = moment().hour();
        
        let text = '날';

        if(hour >= 5 && hour <= 12) //5시~12시
        {
            text = '상쾌한 아침';
        }
        else if(hour > 12 && hour <= 18) //13시~18시
        {
            text = '활기찬 오후';
        }
        else if(hour > 18 && hour <= 22) //19시~22시
        {
            text = '평온한 저녁';
        }
        else //23~4시
        {
            text = '좋은 밤';
        }

        return text;
    };

    return (
        <section
            className='relative'
        >
            <div
                className='flex flex-col justify-center items-center h-dvh jhs-container-padding'
            >
                <ScrollAnimation>
                    <h2 className='text-center'>
                        <TextEffect
                            className='text-5xl sm:text-7xl lg:text-8xl font-bold'
                            delay={20}
                            text={'안녕하세요!'}
                        />
                    </h2>
                </ScrollAnimation>
                <ScrollAnimation
                    delay={500}
                >
                    <TextEffect
                        className='text-base sm:text-xl md:text-2xl m-4 text-gray-300 break-keep text-center'
                        delay={20}
                        text={`${trumanShow()}입니다. 프론트엔드 개발자 정회석입니다!`}
                    />
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default Intro;