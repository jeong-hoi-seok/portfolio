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
            className={`container jhs-container-padding mx-auto ${className}`}
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
                        <p className='text-xs md:text-sm lg:text-xl text-slate-300'>
                            {subTitle}
                        </p>
                    </ScrollAnimation>
            }
            <div className='relative mt-4 sm:mt-5 md:mt-6 xl:mt-8'>
                {children && children}
            </div>
        </section>
    );
};

export default Container;