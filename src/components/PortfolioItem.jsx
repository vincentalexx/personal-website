import React from 'react'

function PortfolioItem({ image, name, link }) {
  return (
    <div className='group/modal min-w-[300px] min-h-[300px] md:min-h-[300px] md:min-w-[300px] lg:h-72 lg:w-72 justify-center items-center mx-auto transition-all ease-out '>
      <a href={link}>
        <div className='opacity-0 group-hover/modal:opacity-100 absolute min-w-[300px] min-h-[300px] md:min-h-[300px] md:min-w-[300px] lg:h-72 lg:w-72 flex justify-center items-center transition-all ease-out duration-500'>
          <p className='w-[300px] h-[300px] text-white font-bold text-center align-middle text-3xl flex justify-center items-center'> {name} </p>
        </div>
        <div style={{backgroundImage: `url(${image})` }} className='bg-center group-hover/modal:blur-[2px] bg-cover aspect-square hover:aspect-video hover:mt-16 align group-hover/modal:opacity-70 transition-all ease-out duration-300'></div>
      </a>
    </div>
  )
}

export default PortfolioItem