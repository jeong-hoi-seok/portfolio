'use client';
import React from 'react';

interface IScrollAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
    threshold?: number;
    delay?: number;
    children?: React.ReactNode;
}

const ScrollAnimation: React.FC<IScrollAnimationProps> = (props) => 
{
    const {
        className,
        threshold = 0.8,
        delay = 0,
        children,
        ...rest
    } = props;
    //ref
    const dom = React.useRef<HTMLDivElement | null>(null);
    const [focus, setFocus] = React.useState<boolean | null>(false);

    const observerEvent: IntersectionObserverCallback = React.useCallback((entrise) => 
    {
        entrise.forEach(entry => 
        {
            if(entry.isIntersecting)
            {
                setTimeout(() => 
                {
                    if(dom.current)
                    {
                        setFocus(true);
                        dom.current.classList.add('jhs-scroll-animation-fade-up-visible');
                    }
                }, delay);
            }
        });
    }, [delay]);

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
            className={`relative jhs-scroll-animation-fade-up ${className || ''}`}
        >
            {
                focus &&
                    <div className='absolute top-0 w-full h-fit'>
                        {children}
                    </div>
            }
            {
                <div className='relative opacity-0 -z-10'>
                    {(children) && children}
                </div>
            }
        </div>
    );
};

export default ScrollAnimation;