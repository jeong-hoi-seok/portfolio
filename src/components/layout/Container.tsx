import React from 'react';

interface IContainerProps {
    className?: string;
    children?: React.ReactNode;
}

const Container = (props: IContainerProps) => 
{
    const {
        className,
        children,
    } = props;
    return (
        <section
            className={`container px-4 py-10 mx-auto ${className}`}
        >
            {children && children}
        </section>
    );
};

export default Container;