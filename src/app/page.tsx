//componetns
import DustEffect from '@/components/DustEffect';

const Home = () => 
{
    return (
        <div className='bg-slate-950 h-full'
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
    );
};

export default Home;