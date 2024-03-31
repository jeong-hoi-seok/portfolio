import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
    children: React.ReactNode;
    id?: string;
}

const Portal: React.FC<IPortal> = ({children, id = '__next-portal'}) => 
{
    const [container, setContainer] = useState<HTMLDivElement | null>(null);

    useEffect(() => 
    {
        const el = document.createElement('div');
        el.id = id;

        document.body.appendChild(el);

        setContainer(el);

        return () => 
        {
            el.remove();
        };
    }, [id]);
    
    return (
        <>
            {
                container &&
                createPortal(
                    children,
                    container
                )
            }
        </>
    );
};

export default Portal;