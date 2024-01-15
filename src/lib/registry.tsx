"use client";
//react
import React, {useState } from 'react';
import { useServerInsertedHTML } from "next/navigation";
//css
import {
    ServerStyleSheet,
    StyleSheetManager,
} from "styled-components";
import GlobalStyle from '@/styles/global';
//type
import { ICommonJSXProps } from '@/interfaces/common.interface';

const StyledReg = (props: ICommonJSXProps) => {
    const {
        children
    } = props;
    //state
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

    useServerInsertedHTML(() =>
    {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    });

    return (
        <React.Fragment>
            {
                typeof window !== "undefined" ?
                <React.Fragment>
                    {children}
                </React.Fragment>
                :
                <StyleSheetManager
                    sheet={styledComponentsStyleSheet.instance}
                >
                    <GlobalStyle />
                    {children}
                </StyleSheetManager>
            }
        </React.Fragment>
    );
};

export default StyledReg;