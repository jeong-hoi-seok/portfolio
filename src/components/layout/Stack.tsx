import React from 'react';

interface IStackProps extends React.HTMLAttributes<HTMLDivElement> {
    direction?: React.CSSProperties['flexDirection'];
    spacing?: number;
    className?: string;
    children?: React.ReactNode;
}

const Stack: React.FC<IStackProps> = (props) => 
{
    const {
        direction = 'row',
        spacing = 1,
        children,
        className,
        ...rest
    } = props;

    return (
        <div
            className={`relative flex ${className}`}
            style={{
                flexDirection: direction,
                gap: spacing ? spacing/2 + 'rem' : 0,
            }}
            {...rest}
        >
            {children}
        </div>
    );
};

export default Stack;