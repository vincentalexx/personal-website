import katekima from '../assets/image/katekima.png'

const Portfolio =() => {
    return (
        <section id="portfolio">
            <div>
                <p className="text-[#dfe5f0] flex text-2xl justify-center">PORTFOLIO</p>
                <div className="portfolio-content">
                    <div className="lg:flex w-[80vw] mx-auto">
                        <img src={katekima} className='object-cover max-w-[550px] mx-auto min-w-[100px]' />
                        <div className="justify-center flex items-center text-center content-center max-w-xl mx-auto align-middle md:max-h-[280px] lg:max-h-[350px]">
                            <span className="mx-auto max-w-md">KATEKIMA</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio 