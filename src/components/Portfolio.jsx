import katekima from '../assets/image/katekima.png'

const Portfolio =() => {
    return (
        <section id="portfolio">
            <div>
                <p className="text-[#dfe5f0] flex text-2xl justify-center mt-12 md:mt-16">PORTFOLIO</p>
                <div className="portfolio-content">
                    <div className="lg:flex w-[80vw] mx-auto align-middle">
                        <img src={katekima} className='object-cover aspect-square mx-auto max-w-[200px] md:max-w-[300px]' />
                        <div className="justify-center items-center text-center content-center max-w-xl mx-auto align-middle md:max-h-[280px] lg:max-h-[100px]">
                            <span className="mx-auto max-w-md">KATEKIMA</span>
                            <br />
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ullam fugiat laboriosam, earum debitis obcaecati nostrum placeat, perferendis corrupti suscipit iusto possimus id maiores nesciunt voluptate facilis qui distinctio consectetur.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio 