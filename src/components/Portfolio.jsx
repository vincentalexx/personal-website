import { useState } from 'react'
import './component.css'
import { PortfolioList} from './PortfolioList'
import PortfolioItem from './PortfolioItem';

const Portfolio =() => {
    const [openModel, setOpenModel] = useState(false);
    return (
        <section id="portfolio">
            <div className='h-36 lg:h-28'></div>
            <div>
            <span className='text-[#dfe5f0] flex text-2xl justify-center  md:mt-[50px] lg:mt-[70px]'>PORTFOLIO</span>
                <div className='grid grid-cols-4'>
                    {PortfolioList.map((portfolio) => {
                        return <PortfolioItem name={portfolio.name} image={portfolio.image} />
                    })}
                </div>
            </div>
        </section>
    );
}

export default Portfolio 