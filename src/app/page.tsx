//componetns
import DustEffect from '@/components/DustEffect';
import ScrollAnimation from '@/components/ScrollAnimation';
import TextEffect from '@/components/TextEffect';

const Home = () => 
{
    return (
        <>
            <div
                
            >
                <DustEffect
                    particle={100}
                    MinSpeed={300}
                    particleRGB='255,238,78'
                    particleMinSize={0.4}
                    particleMaxSize={0.9}
                />
                {/* <TextEffect
                    text='가나다라마바사'
                /> */}
                <h1 className='text-3xl'>
                    Hello, World
                </h1>
            </div>
            <div style={{height: '1000px' }}>
                <ScrollAnimation>
                    {/* <TextEffect
                        text='가나다라마바사'
                    /> */}
                </ScrollAnimation>
            </div>
        </>
    );
};

export default Home;