import { faBars, faBookBookmark, faHome, faIdCardClip, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Navbar = () => {
    let [isOpen, setisOpen] = useState(false)

    return (
        <section className="" id="home">
            <div className="bg-gray-900 w-full p-8 flex justify-between tracking-wider" >
                
                <a href="/" className="text-white lg:ml-20 ml-10 text-3xl -mt-2">Vincentalexx</a>

                <div onClick={() => setisOpen(!isOpen)} className="text-gray-500 right-16 w-7 h-7 absolute cursor-pointer lg:hidden text-2xl transition-all duration-300 ease-out"> 
                    {
                        isOpen ? <FontAwesomeIcon icon={faXmark}/> :  <FontAwesomeIcon icon={faBars} />
                    }
                </div>

                <ul className={'text-gray-500 lg:space-x-7 hidden lg:flex pl-9 justify-between items-center lg:py-0 py-4 right-16 absolute lg:z-auto space-y-3 lg:right-10 lg:space-y-0  lg:border-0 lg:shadow-none shadow-xl border-2 border-gray-600 lg:top-8 top-[87px] lg:rounded-none rounded-md transition-all duration-300 ease-out'}>
                    
                    <li className="icon-hover">
                        <a href="#home" className="home-link"><FontAwesomeIcon icon={faHome} className="mr-3 fa-xl" />Home</a>
                    </li>
                    <li>
                        <a href="#about" className="icon-hover"><FontAwesomeIcon icon={faUser} className="mr-3 fa-xl ml-[3px]" />About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="icon-hover"><FontAwesomeIcon icon={faBookBookmark} className="mr-3 fa-xl ml-[3px]" />Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" className="icon-hover"><FontAwesomeIcon icon={faIdCardClip} className="mr-3 fa-xl" />Contact</a>
                    </li>
                </ul>

                {isOpen && (
                    <ul className={'text-gray-500 w-48 lg:space-x-7 lg:flex pl-9 justify-between items-center lg:py-0 py-5 right-16 absolute lg:z-auto space-y-3 lg:right-10 lg:space-y-0 bg-gray-800/[0.95] lg:bg-gray-800/[1] lg:border-0 lg:shadow-none shadow-xl border-2 border-gray-600 lg:top-8 top-[90px] lg:rounded-none rounded-md transition-all duration-300 ease-out'}>
                        
                        <li>
                            <a href="#home" className="icon-hover"><FontAwesomeIcon icon={faHome} className="mr-3 fa-xl" />Home</a>
                        </li>
                        <li className="icon-hover">
                            <a href="#about" className="icon-hover"><FontAwesomeIcon icon={faUser} className="mr-3 fa-xl ml-[3px]" />About</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="icon-hover"><FontAwesomeIcon icon={faBookBookmark} className="mr-3 fa-xl ml-[3px]" />Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className="icon-hover"><FontAwesomeIcon icon={faIdCardClip} className="mr-3 fa-xl" />Contact</a>
                        </li>
                    </ul>
                )}
            </div>
        </section>
    );
}


export default Navbar