'use client';
import React from 'react';
import { io } from 'socket.io-client';

const Header = () => 
{
    const [isConnect, setIsConnect] = React.useState(false);
    const [count, setCount] = React.useState([]);

    React.useEffect(() => 
    {
        const socket = io('ws://localhost:8080');

        socket.on('connect', () => 
        {
            setIsConnect(true);
            socket.on('accessor', (map) =>
            {
                setCount(map);
            });
        });

        return () => 
        {
            socket.disconnect();
        };
    }, []);

    return (
        <header className='inline-flex fixed left-10 top-10 z-10'>
            {
                isConnect &&
                `현재 ${count.length}명이 저의 사이트를 보고있어요!`
            }
        </header>
    );
};

export default Header;