import { useState } from 'react'
import './component.css'
import { PortfolioList} from './PortfolioList'
import PortfolioItem from './PortfolioItem';

const Portfolio =() => {
    let [openModal, setisOpenModal] = useState(false)
    
    const closeModal = () => {
        setisOpenModal(false);
    }
    return (
        <section id="portfolio">
            <div className='h-24 lg:h-20'></div>
            <div className='mb-40 min-h-[70vh]'>
                <span className='flex text-3xl justify-center  md:mt-[50px] lg:mt-[70px] mb-11'>PORTFOLIO</span>
                <div className='gap-y-12 grid-cols-1 grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 py-4 md:mx-16 lg:mx-20'>
                    {PortfolioList.map((portfolio) => {
                        return <PortfolioItem key={portfolio.id} name={portfolio.name} image={portfolio.image} link={portfolio.link} onclick={() => setisOpenModal(!openModal)} />
                    })}
                </div>
            </div>
        </section>
    );
}

export default Portfolio 