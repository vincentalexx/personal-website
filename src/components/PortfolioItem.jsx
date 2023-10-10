import React from 'react'

function PortfolioItem({ image, name, link }) {
  return (
    <div className='group/modal min-w-[300px] min-h-[300px] md:min-h-[300px] md:min-w-[300px] lg:h-72 lg:w-72 justify-center mx-auto transition-all ease-out '>
      <a href={link}>
        <div className='opacity-0 group-hover/modal:opacity-100 absolute w-[350px] h-[350px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] transition-all ease-out duration-500'>
          <p className='text-white font-bold text-center align-middle mt-[41%] md:mt-[45%] mx-auto'> {name} </p>
        </div>
        <div style={{backgroundImage: `url(${image})` }} className=' group-hover/modal:blur-[2px] bg-cover aspect-square hover:aspect-video hover:mt-11 md:hover:mt-12 lg:hover:mt-[51px] bg-center align group-hover/modal:opacity-70 transition-all ease-out duration-300'></div>
      </a>
    </div>
  )
}

export default PortfolioItem