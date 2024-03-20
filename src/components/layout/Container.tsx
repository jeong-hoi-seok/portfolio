import React from 'react';

interface IContainerProps {
    children?: React.ReactNode;
}

const Container = (props: IContainerProps) => 
{
    const {
        children,
    } = props;
    return (
        <div className='container px-4 py-10 mx-auto'>
            {children && children}
        </div>
    );
};

export default Container;