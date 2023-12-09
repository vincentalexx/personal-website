import image from '../assets/image/foto.png'


const About = () => {
    return (
        <section id="about">
            <div className='h-24 lg:h-16 '></div>
            <span className='flex text-4xl justify-center  md:mt-[50px] lg:mt-[70px] md:-mb-4'>ABOUT</span>
            <div className='justify-center mx-auto md:flex md:space-x-16 xl:space-x-28 space-y-8 md:space-y-0 w-[80vw] md:mt-16mb-16 md:mt-24 min-h-[95vh] md:min-h-[45vh] lg:h-[50vh] lg:mt-20'>
                <div className=''>
                    <img src={image} alt='photo' className="drop-shadow-[4px_-3px_white] object-cover max-h-[400px] mx-auto min-w-[200px] md:-mt-6 lg:-mt-14" />
                </div>
                <div className='justify-center flex items-center text-center content-center max-w-4xl mx-auto align-middle md:max-h-[280px] lg:max-h-[350px]'>
                    <p className='mx-auto max-w-2xl text-xl md:text-lg lg:text-2xl mt-4 md:mt-12'>
                        Hello, my name is Vincent Alexander Haris. I'm an ungraduate computer science major at Bina Nusantara University. I've learned some of the programming fundamentals on my two years in collage, such as Algorithm and Programming Data Structures, Programming Design Methods, Computer Networks, Database Technology, and many more. 
                        <br /> <br />
                        I'm a persistent and 
enthusiastic about learning new things that makes me understand some programming language and frameworks such as C, C++, HTML, CSS, JS, Java, Laravel, React, Tailwind, and PHP.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About