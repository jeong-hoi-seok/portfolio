'use client';
import React from 'react';

interface ITextEffectProps {
    text?: string;
    delay?: number;
}

const TextEffect = (props: ITextEffectProps) => 
{
    const {
        text, //텍스트 값
        delay = 70, //글자 하나의 딜레이 값
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

export default TextEffect;