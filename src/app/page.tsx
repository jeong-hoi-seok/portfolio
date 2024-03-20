//componetns
import DustEffect from '@/components/DustEffect';

const Home = () => 
{
    return (
        <div className='bg-slate-950'>
            <DustEffect
                particle={100}
                MinSpeed={300}
                particleMinSize={0.4}
                particleMaxSize={0.8}
            />
        </div>
    );
};

export default Home;