'use client';
import React from 'react';

interface ICaseCadeTextProps {
    text?: string;
    delay?: number;
}

const CaseCadeText = (props: ICaseCadeTextProps) => 
{
    const {
        text,
        delay = 70,
    } = props;

    return (
        <div>
            {
                text?.split('').map((part, idx) => 
                {
                    return (
                        <span
                            key={idx}
                            className='animate-show-blur opacity-0'
                            style={{
                                animationDelay: (delay * idx) + 'ms',
                            }}
                        >
                            {part}
                        </span>
                    );
                })
            }
        </div>
    );
};

export default CaseCadeText;