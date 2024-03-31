'use client';
import React from 'react';
//
import Portal from '../Portal';

interface IPopoverProps {
    open: boolean;
    scrollDisable?: boolean;
    closeCallback?: () => void;
    anchorEl?: Element | null;
    anchorWidth?: boolean;
    anchorHorizontal?: 'left' | 'right';
    children?: React.ReactNode;
}

const Popover: React.FC<IPopoverProps> = (props) => 
{
    const {
        open,
        closeCallback,
        anchorEl,
        anchorWidth, //기준점 element의 width 를 min-width로 설정
        anchorHorizontal = 'left',
        scrollDisable,
        children,
    } = props;
    // ref
    const popoverRef = React.useRef<HTMLDivElement | null>(null);
    //state
    const [popState, setPopState] = React.useState<boolean>(open);
    const [delayState, setDelayState] = React.useState<boolean>(open);
    const [ahchorPos, setAhchorPos] = React.useState<{vertical: number | 'auto', horizontal: number | 'auto'}>({vertical: 'auto', horizontal: 'auto'});
    const [ahchorWidth, setAhchorWidth] = React.useState<number>(48);

    const closeEvent = React.useCallback(() => 
    {
        document.body.removeAttribute('style');
        setDelayState(false);
        setTimeout(() => 
        {
            setPopState(false);
            //callback
            if(typeof closeCallback === 'function')
            {
                closeCallback();
            }
        }, 300);
    }, [closeCallback]);

    React.useLayoutEffect(() => 
    {
        if(anchorEl)
        {
            const resizeEvent = () => 
            {
                const wh = window.innerWidth;
                const ael = anchorEl.getBoundingClientRect();

                if(anchorWidth)
                {
                    setAhchorWidth(ael.width);
                }
                
                let hpos: number | null = null;

                switch (anchorHorizontal) 
                {
                case 'left':
                    hpos = ael.left;
                    break;
                case 'right':
                    hpos = wh - ael.right;
                    break;
                }

                if(hpos && typeof hpos === 'number')
                {
                    const pos = {
                        vertical: ael.bottom,
                        horizontal: hpos,
                    };
                    
                    setAhchorPos(pos);
                }
            };
    
            resizeEvent();
            window.addEventListener('resize', resizeEvent);
            return () => 
            {
                window.removeEventListener('resize', resizeEvent);
            };
        }
    }, [anchorEl, anchorWidth, anchorHorizontal]);

    React.useEffect(() => 
    {
        if(scrollDisable)
        {
            if(open)
            {
                document.body.style.overflow = 'hidden';
            }
            else
            {
                document.body.removeAttribute('style');
            }
        }
        setPopState(open);
        setDelayState(open);

        return () => 
        {
            if(scrollDisable)
            {
                document.body.removeAttribute('style');
            }
        };
    }, [open, scrollDisable]);

    return (
        <React.Fragment>
            {
                popState &&
                    <Portal>
                        <div className='fixed inset-0 z-[9999]'>
                            <div
                                className='fixed w-full h-full -z-[1]'
                                onClick={closeEvent}
                            />
                            <div
                                ref={popoverRef}
                                className={`
                                    absolute
                                    rounded-lg
                                    min-w-[${ahchorWidth}]
                                    min-h-4
                                    mt-2
                                    overflow-hidden
                                    shadow-lg
                                    transition-all
                                    duration-300
                                    backdrop-blur-md
                                    ${delayState ? 'animate-fade-in' : 'animate-fade-out'}
                                `}
                                {...(
                                    anchorHorizontal === 'left' ?
                                        { style: {top: ahchorPos.vertical + 'px', left: ahchorPos.horizontal + 'px'} }
                                        :
                                        { style: {top: ahchorPos.vertical + 'px', right: ahchorPos.horizontal + 'px'} }
                                )}
                            >
                                {children && children}
                            </div>
                        </div>
                    </Portal>
            }
        </React.Fragment>
    );
};

export default Popover;