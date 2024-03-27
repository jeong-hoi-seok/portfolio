import type { Metadata } from 'next';
import '../styles/globals.css';
//component
import Header from '@/components/common/Header';
import SocketProvider from '@/components/provider/SocketProvider';

export const metadata: Metadata = {
    title: '정회석 포트폴리오',
    description: '안녕하세요. 개발자 정회석입니다!',
};

const RootLayout = ({children}: Readonly<{children: React.ReactNode;}>) => 
{
    return (
        <html lang="ko">
            <body>
                <main>
                    <SocketProvider>
                        <Header/>
                        {children}
                    </SocketProvider>
                </main>
            </body>
        </html>
    );
};

export default RootLayout;