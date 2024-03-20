//componetns
import DustEffect from '@/components/DustEffect';
import ScrollAnimation from '@/components/ScrollAnimation';

const Home = () => 
{
    return (
        <>
            <div
                style={{
                    background: 'radial-gradient(at center 0%, #1d192e, #09090b)',
                }}
            >
                <DustEffect
                    particle={100}
                    MinSpeed={300}
                    particleMinSize={0.4}
                    particleMaxSize={0.9}
                />
            </div>
            <div style={{height: '1000px', backgroundColor: '#09090b'}}>
                <ScrollAnimation>
                    <div className='w-96 h-96 bg-slate-800'/>
                </ScrollAnimation>
            </div>
        </>
    );
};

export default Home;