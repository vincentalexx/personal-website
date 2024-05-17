import { useState } from 'react'
import './component.css'
import { PortfolioList} from './PortfolioList'
import PortfolioItem from './PortfolioItem';

const Portfolio =() => {

    return (
        <section id="portfolio">
            <div className='flex justify-center items-center'>
                <div className='min-h-[100vh] mt-[18vh] mb-[10vh] w-full h-max'>
                    <span className='flex text-4xl justify-center mb-11 tracking-wider'>Portfolio</span>
                    <div className='gap-y-12 grid-cols-1 grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 py-4 md:mx-16 lg:mx-20'>
                        {PortfolioList.map((portfolio) => {
                            return <PortfolioItem key={portfolio.id} portfolio={portfolio} onclick={() => setisOpenModal(!openModal)} />
                        })}
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Portfolio 