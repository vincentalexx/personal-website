import image from '../assets/image/takina.jpg'
const About = () => {
    return (
        <section id="about">
            <div className='lg:flex font-bold mt-44 lg:mt-40 h-[85vh] lg:h-[77vh] mx-20 lg:-space-x-28 items-center justify-center'>
                <div className='flex items-center justify-center lg:w-[3000px]'>
                    <img src={image} alt='photo' className="object-cover aspect-square max-h-[350px] justify-center" />
                </div>
                <div className='mt-14 lg:mt-0 flex text-center items-center justify-center sm:max-w-[525px] lg:max-w-[2500px] xl:max-w-[3000px] md:mx-36 lg:mx-auto'>
                    <p className='justify-center flex items-center w-full lg:mr-20 xl:mr-44'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quam molestiae totam rem eveniet, nesciunt tempore excepturi dolorum ratione id delectus repellat quos inventore quia recusandae magni exercitationem aliquam consectetur.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About