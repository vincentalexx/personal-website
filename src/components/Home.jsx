import image from '../assets/image/programmer.png'
import Typewriter from "typewriter-effect";
import Title from './Title.json'

const Home = () => {
    return (
        <section id="home">
            <div className='home h-[100vh] justify-center align-middle'>
                <div className='h-full flex flex-col lg:flex-row justify-center items-center lg:space-x-16 xl:space-x-28 space-y-8 md:space-y-0'>
                    <div className='flex justify-center items-center'>
                        <img src={image} alt='photo' className="drop-shadow-[3px_-3px_white] object-cover aspect-square max-h-[300px] md:max-h-[350px] lg:max-h-[400px] mx-auto min-w-[250px]" />
                    </div>
                    <div className='justify-center flex items-center text-center content-center max-w-xl mx-auto align-middle md:max-h-[280px] lg:max-h-[350px]'>
                        <p className='text-white font-bold max-w-md lg:max-w-lg text-2xl md:text-3xl lg:text-5xl mt-24'>
                            <Typewriter options={{strings: Title, autoStart: true, loop: true,}} />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home