'use client';
import React from 'react';

const SocketProvider = ({children}: Readonly<{children: React.ReactNode;}>) => 
{
    React.useEffect(() => 
    {
        const ws = new WebSocket('wss://wuvfnmyuh1.execute-api.ap-northeast-2.amazonaws.com/production/');

        ws.onopen = () => 
        {
            ws.send('Hello Server!');
        };

        ws.onerror = (event) => 
        {
            console.log('WebSocket error: ', event);
        };

        ws.onmessage = () => 
        {
            console.log('메시지??');
        };
    }, []);

    return (
        <React.Fragment
        >
            {children}
        </React.Fragment>
    );
};

export default SocketProvider;