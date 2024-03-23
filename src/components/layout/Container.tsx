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
                subTitle &&
                    <ScrollAnimation
                        delay={250}
                    >
                        <h3 className='text-1xl font-bold mb-1'>
                            {subTitle}
                        </h3>
                    </ScrollAnimation>
            }
            {
                title &&
                    <ScrollAnimation>
                        <h2 className='text-3xl'>
                            {title}
                        </h2>
                    </ScrollAnimation>
            }
            {children && children}
        </section>
    );
};

export default Container;