import React, { useState } from 'react';
import Modal from './Modal';

function PortfolioItem({ portfolio }) {
  let [open, setisOpen] = useState(false);

  return (
    <div className='flex justify-center items-center'>
      <div className='group/modal min-w-[300px] min-h-[300px] md:min-h-[300px] md:min-w-[300px] lg:h-72 lg:w-72 justify-center items-center mx-auto transition-all ease-out' onClick={() => setisOpen(true)}>
          <div className='opacity-0 group-hover/modal:opacity-100 absolute min-w-[300px] min-h-[300px] md:min-h-[300px] md:min-w-[300px] lg:h-72 lg:w-72 flex justify-center items-center transition-all ease-out duration-500'>
            <p className='w-[300px] h-[300px] text-white font-bold text-center align-middle text-3xl flex justify-center items-center'> {portfolio.name} </p>
          </div>
          <div style={{backgroundImage: `url(/image/${portfolio.name}/${portfolio.image[0]}.png)` }} className='bg-center group-hover/modal:blur-[1px] border-0 group-hover/modal:border-[1px] bg-cover aspect-square hover:aspect-video hover:mt-16 align group-hover/modal:opacity-70 transition-all ease-out duration-300 cursor-pointer'></div>
    </div>
        <Modal open={open} onClose={() => setisOpen(false)} portfolio={portfolio} />
      </div>
  )
}

export default PortfolioItem