import image from '../assets/image/programmer.png'
import Typewriter from "typewriter-effect";
import Title from './Title.json'

const Home = () => {
    return (
        <section id="home">
            <div className='home'>
                <div className='h-36 lg:h-32'></div>

                <div className='justify-center mx-auto md:flex md:space-x-16 xl:space-x-28 space-y-8 md:space-y-0 w-[80vw] md:mt-[80px] lg:mt-[110px] h-[80vh] md:h-[70vh] lg:h-[68vh]'>
                    <div className=''>
                        <img src={image} alt='photo' className="drop-shadow-[3px_3px_white] object-cover aspect-square max-h-[350px] mx-auto min-w-[250px]" />
                    </div>
                    <div className='justify-center flex items-center text-center content-center max-w-xl mx-auto align-middle md:max-h-[280px] lg:max-h-[350px]'>
                        <p className='text-white font-bold mx-auto max-w-md md:w-[380px] lg:w-[448px] text-2xl md:text-3xl lg:text-5xl'>
                            <Typewriter options={{strings: Title, autoStart: true, loop: true,}} />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home