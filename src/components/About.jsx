import image from '../assets/image/foto.png'


const About = () => {
    return (
        <section id="about">
            <div className='flex flex-col justify-center items-center min-h-[100vh] pt-[5vh] mb-20 lg:mt-0'>
                <span className='flex text-4xl text-center mb-10'>ABOUT</span>
                <div className='justify-center items-center lg:flex lg:space-x-16 xl:space-x-28 space-y-8 lg:space-y-0'>
                    <div className='flex justify-center items-center'>
                        <img src={image} alt='photo' className="drop-shadow-[4px_-3px_white] object-cover max-h-[250px] lg:max-h-[400px] mx-auto min-w-[200px]" />
                    </div>
                    <div className='justify-center flex items-center text-center max-w-4xl'>
                        <p className='text-center w-[80vw] md:w-[70vw] lg:w-[45vw] xl:w-[40vw] text-xl lg:text-2xl mb-0'>
                            Hello, my name is Vincent Alexander Haris. I'm an ungraduate computer science major at Bina Nusantara University. I've learned some of the programming fundamentals on my two years in collage, such as Algorithm and Programming Data Structures, Programming Design Methods, Computer Networks, Database Technology, and many more. 
                            <br /> <br />
                            I'm a persistent and enthusiastic about learning new things that makes me understand some programming language and frameworks such as C, C++, HTML, CSS, JS, Java, PHP, Laravel, React, Tailwind, Bootstrap.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default About