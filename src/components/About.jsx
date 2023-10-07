import image from '../assets/image/takina.jpg'


const About = () => {
    return (
        <section id="about">
            <div className='h-36 lg:h-28 '></div>
            <span className='text-[#dfe5f0] flex text-2xl justify-center  md:mt-[50px] lg:mt-[70px] mb-11'>ABOUT</span>
            <div className='justify-center mx-auto md:flex md:space-x-16 xl:space-x-28 space-y-8 md:space-y-0 w-[80vw] md:mt-16 h-[600px] md:h-[400px] lg:h-[500px]'>
                <div className=''>
                    <img src={image} alt='photo' className="object-cover aspect-square max-h-[350px] mx-auto min-w-[200px]" />
                </div>
                <div className='justify-center flex items-center text-center content-center max-w-xl mx-auto align-middle md:max-h-[280px] lg:max-h-[350px]'>
                    <p className='mx-auto max-w-md text-2xl md:text-3xl lg:text-2xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magni atque iure sint fuga vitae, commodi saepe impedit ratione alias consectetur vel? Non esse neque magnam pariatur ad unde illum.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About