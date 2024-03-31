'use client';
import React from 'react';
import Image from 'next/image';
import { io } from 'socket.io-client';
//
import Popover from '../popover/Popover';
import OSViewer from '../OSViewer';

export interface ICountProps {
    browser: string;
    connectionTime: Date;
    id: string;
    os: string;
}

const Header = () => 
{
    //state
    const [popoverRef, setPopoverRef] = React.useState<HTMLElement | null>(null); //셀렉트 박스 앵커 el
    const [isScroll, setIsScroll] = React.useState(false);
    const [isConnect, setIsConnect] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const [count, setCount] = React.useState<ICountProps[]>([]); //현재 접속자 수

    React.useEffect(() => 
    {
        if(!isError)
        {
            //socket init
            const socket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER_URL as string);
            //socket event
            socket.on('connect', () => 
            {
                console.log('--소켓 연결 성공--');
                setIsConnect(true);
                socket.on('accessor', (map) =>
                {
                    setCount(map);
                });
            });
    
            socket.on('connect_error', () => 
            {
                console.log('--소켓 연결 실패--');
                setIsError(true);
            });
    
            const scrollEvent = () => 
            {
                setIsScroll(window.scrollY > 10);
            };
            document.addEventListener('scroll', scrollEvent);
    
            return () => 
            {
                socket.disconnect();
                document.removeEventListener('scroll', scrollEvent);
            };
        }
    }, [isError]);

    return (
        <header
            className='inline-flex fixed left-10 top-10 z-10'
        >
            {
                isConnect &&
                    <div
                        className='cursor-pointer flex items-center'
                        onClick={(e) => 
                        {
                            setPopoverRef(e.currentTarget);
                        }}
                    >
                        <div className='jhs-header-prefix-box mr-1'>
                            <div className={`absolute w-full h-full transition-opacity duration-500 ${isScroll ? 'opacity-100' : 'opacity-0'} `}>
                                <Image
                                    src={'/images/icon/eye.svg'}
                                    alt='eye'
                                    fill
                                />
                            </div>
                            <span className={`transition-opacity duration-500 ${isScroll ? 'opacity-0' : 'opacity-100'}`}>현재</span>
                        </div>
                        <span>{count.length}</span>
                        <span className={`transition-opacity duration-500 ${isScroll ? 'opacity-0' : 'opacity-100'}`}>명이 저의 사이트를 보고있어요!</span>
                    </div>
            }
            <Popover
                open={Boolean(popoverRef)}
                anchorEl={popoverRef}
                closeCallback={() => 
                {
                    setPopoverRef(null);
                }}
            >
                <div className='jhs-acrylic-box p-3'>
                    <OSViewer
                        maps={count}
                    />
                </div>
            </Popover>
        </header>
    );
};

export default Header;