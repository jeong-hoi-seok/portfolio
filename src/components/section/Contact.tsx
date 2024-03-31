'use client';
import React from 'react';
//
import Container from '@/components/layout/Container';
import Stack from '../layout/Stack';
import Button from '../inputs/Button';

const Contact = () => 
{
    const route = (url: string) => 
    {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Container
            title='Contact'
            subTitle='저를 더 알고 싶으시다면'
        >
            <div className='grid grid-rows-1 jhs-acrylic-box min-h-[300px] py-6 px-8'>
                <div className='mb-20'>
                    <Stack
                        direction='column'
                        spacing={2}
                    >
                        <div>
                            <h4 className='mb-1 font-bold'>
                                GitHub.
                            </h4>
                            <Button
                                variant='outlined'
                                className='py-3 px-6 text-sm'
                                onClick={() => 
                                {
                                    route('https://github.com/jeong-hoi-seok');
                                }}
                            >
                                깃 허브 구경 가기
                            </Button>
                        </div>
                        <div>
                            <h4 className='mb-2 font-bold'>
                                Notion.
                            </h4>
                            <Button
                                variant='outlined'
                                className='py-3 px-6 text-sm'
                                onClick={() => 
                                {
                                    route('https://www.notion.so/hoirongko/eea23b4214c14587b189260e9c0099b0');
                                }}
                            >
                                노션 구경 가기
                            </Button>
                        </div>
                    </Stack>
                </div>
                <p>
                    <strong>
                        jeong-hoi-seok
                    </strong>
                </p>
                <div>
                    <Button
                        type='button'
                        className='text-slate-400 text-sm font-normal'
                        onClick={() => 
                        {
                            route('https://github.com/jeong-hoi-seok/portfolio');
                        }}
                    >
                        Portfolio Code 구경 가기
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default Contact;