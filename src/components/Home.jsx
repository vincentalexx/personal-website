import image from '../assets/image/programmer.png'


const Home = () => {
    return (
        <section id="home">
            <div className='h-36 md:h-48 lg:h-28'></div>

            <div className='justify-center mx-auto md:flex md:space-x-16 xl:space-x-28 space-y-8 md:space-y-0 w-[80vw] md:mt-[50px] lg:mt-[110px] h-[500px] md:h-[300px] lg:h-[500px]'>
                <div className=''>
                    <img src={image} alt='photo' className="object-cover aspect-square max-h-[350px] mx-auto min-w-[200px]" />
                </div>
                <div className='justify-center flex items-center text-center content-center max-w-xl mx-auto align-middle md:max-h-[280px] lg:max-h-[350px]'>
                    <p className='mx-auto max-w-md text-2xl md:text-3xl lg:text-5xl'>
                        Hello! My name is Vincent Alexander Haris... This is my personal website !!!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Home