import type { Metadata } from 'next';
//config
import config from '@/lib/config';
//css
import '../styles/reset.css';
import StyledReg from '@/lib/registry';
//type
import { ICommonJSXProps } from '@/interfaces/common.interface';

const RootLayout = (props: ICommonJSXProps) => {
    const {
        children
    } = props;

    return (
        <html lang="ko">
            <body>
                <StyledReg>
                    <main>
                        {children}
                    </main>
                </StyledReg>
            </body>
        </html>
    );
}

//seo
export const metadata: Metadata = config;
export default RootLayout;
