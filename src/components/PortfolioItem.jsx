import React from 'react'

function PortfolioItem({ image, name, link }) {
  return (
    <div className='group/modal w-[250px] h-[250px] md:h-[200px] md:w-[200px] lg:h-60 lg:w-60 justify-center mx-auto transition-all ease-out'>
      {/* <a href={link}> */}
        <div className='absolute bg-white  h-10'></div>
        <div className='opacity-0 group-hover/modal:opacity-100 absolute w-[250px] h-[250px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] transition-all ease-out duration-500'>
          <p className='text-[#dfe5f0] font-bold text-center align-middle mt-[41%] md:mt-[45%] mx-auto'> {name} </p>
        </div>
        <div style={{backgroundImage: `url(${image})` }} className=' bg-cover aspect-square hover:aspect-video hover:mt-11 md:hover:mt-12 lg:hover:mt-[51px] bg-center align group-hover/modal:opacity-70 transition-all ease-out duration-300'></div>
      {/* </a> */}
    </div>
  )
}

export default PortfolioItem