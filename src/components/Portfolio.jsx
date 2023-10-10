import { useState } from 'react'
import './component.css'
import { PortfolioList} from './PortfolioList'
import PortfolioItem from './PortfolioItem';

const Portfolio =() => {
    return (
        <section id="portfolio">
            <div className='h-24 lg:h-20'></div>
            <div className='mb-40'>
                <span className='flex text-3xl justify-center  md:mt-[50px] lg:mt-[70px] mb-11'>PORTFOLIO</span>
                <div className='gap-y-12 grid-cols-1 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-4 md:mx-16 lg:mx-20 cursor-pointer'>
                    {PortfolioList.map((portfolio) => {
                        return <PortfolioItem name={portfolio.name} image={portfolio.image} link={portfolio.link} />
                    })}
                </div>
                {/* {openModal && <Modal closeModal={setOpenModal} />} */}
            </div>
        </section>
    );
}

export default Portfolio 