import image from '../assets/image/takina.jpg'
const About = () => {
    return (
        <section id="about">
            <div className='lg:flex font-bold mt-44 lg:mt-40 h-[90vh] lg:h-[77vh] mx-20 lg:mx-52 lg:space-x-24 items-center justify-center'>
                <img src={image} alt='photo' className="object-cover aspect-square max-h-[350px] justify-center" />
                <div className='mt-14 lg:mt-10 xl:mt-28 text-center'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quam molestiae totam rem eveniet, nesciunt tempore excepturi dolorum ratione id delectus repellat quos inventore quia recusandae magni exercitationem aliquam consectetur.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About