import React from 'react';
//
import { ICountProps } from './common/Header';
//
import Stack from './layout/Stack';

interface IOSViewerProps {
    maps: ICountProps[];
}

const OSViewer: React.FC<IOSViewerProps> = (props) => 
{
    const {
        maps,
    } = props;

    const convmaps = () => 
    {
        const hash = new Map();

        for (const {os} of maps)
        {
            if(hash.has(os))
            {
                hash.set(os, hash.get(os) + 1);
            }
            else
            {
                hash.set(os , 1);
            }
        }
        
        return Array.from(hash, ([os, count]) => 
        {
            return {
                os,
                count,
            };
        });
    };

    return (
        <div>
            <p className='text-xs text-slate-400'>
                os
            </p>
            <Stack
                direction='column'
                spacing={0}
            >
                {
                    convmaps().map((d,i) => 
                    {
                        return (
                            <div key={i} className='text-sm text-slate-300'>
                                <p>{d.os} : {d.count}</p>
                            </div>
                        );
                    })
                }
            </Stack>
        </div>
    );
};

export default OSViewer;