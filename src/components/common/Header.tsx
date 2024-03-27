'use client';
import React from 'react';
import Image from 'next/image';
import { io } from 'socket.io-client';

const Header = () => 
{
    //state
    const [isScroll, setIsScroll] = React.useState(false);
    const [isConnect, setIsConnect] = React.useState(false);
    const [count, setCount] = React.useState([]);

    React.useEffect(() => 
    {
        //socket init
        const socket = io('ws://port-0-websocket-server-2scwz2alua1clyv.sel5.cloudtype.app/');
        //socket event
        socket.on('connect', () => 
        {
            setIsConnect(true);
            socket.on('accessor', (map) =>
            {
                setCount(map);
            });
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
    }, []);

    return (
        <header
            className='inline-flex fixed left-10 top-10 z-10'
        >
            {
                isConnect &&
                    <div className='flex items-center'>
                        <div className='relative mr-1 headerPrefixBox'>
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
        </header>
    );
};

export default Header;