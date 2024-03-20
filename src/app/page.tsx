//componetns
import DustEffect from '@/components/DustEffect';

const Home = () => 
{
    return (
        <div className='bg-slate-950 h-full'
            style={{
                background: 'linear-gradient(to top, #000 0%, #322235 100%)',
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