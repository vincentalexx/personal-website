import image from '../assets/image/takina.jpg'
const About = () => {
    return (
        <section id="about">
            <div className='justify-center lg:flex font-bold mt-60 h-[68vh] mx-52 space-x-28'>
                <img src={image} alt='photo' className="w-56 object-cover aspect-square max-h-[350px]" />
                <div className='lg:mt-28'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quam molestiae totam rem eveniet, nesciunt tempore excepturi dolorum ratione id delectus repellat quos inventore quia recusandae magni exercitationem aliquam consectetur.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About