import React from 'react'

function PortfolioItem({ image, name }) {
  return (
    <div className='portfolioItem w-60 h-60 justify-center mx-auto'>
        <p className='text-center absolute mx-auto my-auto'> {name} </p>
        <div style={{backgroundImage: `url(${image})` }} className='bg-cover aspect-square bg-center w-full h-full'></div>
    </div>
  )
}

export default PortfolioItem