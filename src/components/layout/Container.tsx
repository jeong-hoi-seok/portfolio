import React from 'react';
//
import ScrollAnimation from '../ScrollAnimation';

interface IContainerProps {
    title?: string;
    subTitle?: string;
    className?: string;
    children?: React.ReactNode;
}

const Container = (props: IContainerProps) => 
{
    const {
        title,
        subTitle,
        className,
        children,
    } = props;
    return (
        <section
            className={`container px-4 py-10 mx-auto ${className}`}
        >
            {
                title &&
                    <ScrollAnimation
                        delay={250}
                    >
                        <h3 className='font-bold'>
                            {title}
                        </h3>
                    </ScrollAnimation>
            }
            {
                subTitle &&
                    <ScrollAnimation>
                        <p className='text-xl text-slate-300'>
                            {subTitle}
                        </p>
                    </ScrollAnimation>
            }
            <div className='relative mt-8'>
                {children && children}
            </div>
        </section>
    );
};

export default Container;