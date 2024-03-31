'use client';
import React from 'react';

type IRippleProps = {
    x: string;
    y: string;
}

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    variant?: 'text' | 'outlined' | 'contained';
    children?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = (props) => 
{
    const {
        variant = 'text',
        className,
        children,
        ...rest
    } = props;
    //ref
    const btnDom = React.useRef(null);
    //state
    const [rippleColor, setRippleColor] = React.useState('#fff'); //버튼 색에 따른 ripple 색상
    const [rippleStack, setRippleStack] = React.useState<IRippleProps[] | []>([]); //버튼 ripple stack

    //클릭 트리거 확장 이벤트
    const clickTriggerEvent = (e: React.MouseEvent<HTMLButtonElement>) => 
    {
        const g = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - g.left;
        const y = e.clientY - g.top;

        const ripples = {
            x: x + 'px',
            y: y + 'px',
        };

        setRippleStack((prev) => 
        {
            return [...prev, ripples];
        });

        if(props && typeof props.onClick === 'function')
        {
            props.onClick(e);
        }
    };

    //버튼 레이아웃 지정
    React.useLayoutEffect(() => 
    {
        const el = btnDom.current;
        if(el)
        {
            const btncolor = window.getComputedStyle(el).backgroundColor;
            const rgb = btncolor.match(/\d+/g);
            if(rgb)
            {
                const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
                if(brightness > 128)
                {
                    setRippleColor('#535353');
                }
                else
                {
                    setRippleColor('#fff');
                }
            }
        }
    }, []);

    // ripple stack 상태 업데이트
    React.useEffect(() => 
    {
        if(rippleStack.length > 0)
        {
            const timer = setTimeout(() => 
            {
                setRippleStack([]);
            }, 700);
    
            return () => 
            {
                clearTimeout(timer);
            };
        }
    }, [rippleStack]);

    return (
        <button
            ref={btnDom}
            type={rest.type ? rest.type : 'button'}
            {...rest}
            onClick={clickTriggerEvent}
            className={`
                relative
                inline-flex
                justify-center
                items-center
                w-auto
                min-w-16
                align-middle
                appearance-none
                leading-tight
                font-medium
                box-border
                no-underline
                select-none
                ${variant === 'contained' ? 'bg-slate-500' : 'bg-transparent'}
                ${variant === 'outlined' ? 'border border-slate-500' : ''}
                rounded-md
                ${className}
            `}
        >
            {children}
            <span
                className='
                    absolute
                    inset-0
                    z-0
                    rounded-[inherit]
                    overflow-hidden
                    pointer-events-none
                '
            >
                {
                    rippleStack.map((d,i) => 
                    {
                        return (
                            <span
                                key={i}
                                className='
                                    absolute
                                    w-full
                                    aspect-square
                                    rounded-full
                                    pointer-events-none
                                    transform
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    animate-button-ripple
                                '
                                style={{
                                    top: d.y,
                                    left: d.x,
                                    backgroundColor: rippleColor,
                                }}
                            />
                        );
                    })
                }
            </span>
        </button>
    );
};

export default Button;