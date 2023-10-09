import image from '../assets/image/programmer.png'
import Typewriter from "typewriter-effect";
import Title from './Title.json'

const Home = () => {
    return (
        <section id="home">
            <div className='h-36 md:h-48 lg:h-28'></div>

            <div className='justify-center mx-auto md:flex md:space-x-16 xl:space-x-28 space-y-8 md:space-y-0 w-[80vw] md:mt-[50px] lg:mt-[110px] h-[500px] md:h-[300px] lg:h-[500px]'>
                <div className=''>
                    <img src={image} alt='photo' className="object-cover aspect-square max-h-[350px] mx-auto min-w-[250px]" />
                </div>
                <div className='justify-center flex items-center text-center content-center max-w-xl mx-auto align-middle md:max-h-[280px] lg:max-h-[350px]'>
                    <p className='mx-auto max-w-md md:w-[380px] lg:w-[448px] text-2xl md:text-3xl lg:text-5xl'>
                        <Typewriter options={{strings: Title, autoStart: true, loop: true,}} />
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Home