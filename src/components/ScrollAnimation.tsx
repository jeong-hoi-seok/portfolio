'use client';
import React, { useCallback } from 'react';

interface IScrollAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
    threshold?: number;
    children?: React.ReactNode;
}

const ScrollAnimation: React.FC<IScrollAnimationProps> = (props) => 
{
    const {
        className,
        threshold = 0.8,
        children,
        ...rest
    } = props;
    //ref
    const dom = React.useRef<HTMLDivElement | null>(null);

    const observerEvent: IntersectionObserverCallback = useCallback((entrise) => 
    {
        entrise.forEach(entry => 
        {
            if(entry.isIntersecting)
            {
                if(dom.current)
                {
                    dom.current.classList.add('scroll-animation-fade-up-visible');
                }
            }
        });
    }, []);

    React.useEffect(() => 
    {
        const el = dom.current;
        
        if(el)
        {
            const observer = new IntersectionObserver(observerEvent, {threshold: threshold});
            observer.observe(el);

            return () => 
            {
                observer && observer.disconnect();
            };
        }
    }, [observerEvent, threshold]);

    return (
        <div
            {...rest}
            ref={dom}
            className={`scroll-animation-fade-up ${className || ''}`}
        >
            {children && children}
        </div>
    );
};

export default ScrollAnimation;