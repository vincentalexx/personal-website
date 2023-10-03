import image from '../assets/image/takina.jpg'
const About = () => {
    return (
        <section id="about">
            <div className='h-36 lg:h-28'></div>
            {/* <div className='lg:flex font-bold h-[500px] lg:h-[85vh] mx-20 items-center justify-center '>
                <div className='flex items-center justify-center lg:w-[3000px] min-w-[150px] lg:-ml-32'>
                    <img src={image} alt='photo' className="object-cover aspect-square max-h-[350px] justify-center" />
                </div>
                <div className='sm:mx-20 md:mx-28 mt-14 lg:-ml-40 lg:mt-0 flex text-center items-center w-full justify-center sm:max-w-[525px] lg:max-w-[2500px] xl:max-w-[3000px] md:mr-36 lg:left-44'>
                    <p className='justify-center items-center w-full text-2xl lg:text-5xl'>
                        Hello! My name is Vincent Alexander Haris... This is my personal website !!!
                    </p>
                </div>
            </div> */}

            <div className='justify-center mx-auto md:flex md:space-x-16 xl:space-x-28 space-y-8 md:space-y-0 w-[80vw] md:mt-[50px] lg:mt-[125px] h-[500px] md:h-[400px] lg:h-[500px]'>
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

export default About