//componetns
import DustEffect from '@/components/DustEffect';

const Home = () => 
{
    return (
        <div className='bg-slate-950'
            style={{
                background: 'linear-gradient(to top, #29323c 0%, #485563 100%)',
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