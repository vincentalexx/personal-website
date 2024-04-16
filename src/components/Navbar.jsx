import { faBars, faBookBookmark, faHome, faIdCardClip, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import './component.css';

const Navbar = () => {
    let [isOpen, setisOpen] = useState(false)

    const closeModel = () => {
        setisOpen(false);
    }

    let [isSelected, setisSelected] = useState(false)

    const Selected = () => {
        setisSelected(false)
    }
    
    var selection = document.getElementsByClassName("icon-hover")
    console.log(selection[0])
    
    function select(id){
        for(var i = 0; i < selection.length; i++){
            if(i == id){
                selection[i].classList.add("text-[#ffdd00]")

                if(i > 3){
                    setisOpen(!isOpen)
                    selection[i-4].classList.add("text-[#ffdd00]")
                }
            }
            else{
                selection[i].classList.remove("text-[#ffdd00]")
                if(i < 4){
                    selection[i+4].classList.remove("text-[#ffdd00]")
                }
                if(i >= 4){
                    selection[i-4].classList.remove("text-[#ffdd00]")
                }
            }
        }
    }

    return (
        <section className="" id="home">
            <div className="navbar p-8 w-full flex justify-between tracking-wider shadow-lg fixed top-0 z-[2]" >
                
                <a href="/" className="name lg:ml-20 ml-10 text-3xl tracking-wider font-semibold -mt-2 hover:text-[#ffdd00] transition-all duration-300 ease-out">Vincentalexx</a>
                
                <div onClick={() => setisOpen(!isOpen)} className="right-16 w-7 h-7 absolute cursor-pointer lg:hidden text-2xl transition-all duration-300 ease-out "> 
                    {
                        isOpen ? <FontAwesomeIcon icon={faXmark}/> :  <FontAwesomeIcon icon={faBars} />
                    }
                </div>

                <ul className={'lg:space-x-7 hidden lg:flex pl-9 justify-between items-center lg:py-0 py-4 right-16 absolute lg:z-auto space-y-3 lg:right-10 lg:space-y-0  lg:border-0 lg:shadow-none shadow-xl border-2 border-gray-600 lg:top-8 top-[87px] lg:rounded-none rounded-md transition-all duration-300 ease-out'}>
                    
                    <li className="">
                        <a href="#home" className="icon-hover font-bold text-[#ffdd00]"  onClick={() => select(0)}><FontAwesomeIcon icon={faHome} className="mr-3 fa-xl" />Home</a>
                    </li>
                    <li>
                        <a href="#about" className="icon-hover font-bold"  onClick={() => select(1)}><FontAwesomeIcon icon={faUser} className="mr-3 fa-xl ml-[3px]" />About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="icon-hover font-bold" onClick={() => select(2)}><FontAwesomeIcon icon={faBookBookmark} className="mr-3 fa-xl ml-[3px]" />Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" className="icon-hover font-bold mr-10"  onClick={() => select(3)}><FontAwesomeIcon icon={faIdCardClip} className="mr-3 fa-xl" />Contact</a>
                    </li>
                </ul>
            </div>

                {isOpen && (
                    <ul className={'active flex flex-col text-gray-500 w-[100vw] font-bold justify-between items-center fixed z-[3] lg:space-y-0 bg-[#1e2021] lg:bg-[#202224]] lg:border-0 border-2 border-[#202224] lg:top-8 top-[90px] lg:hidden'}>
                        
                        <li className="flex justify-center icon-hover cursor-pointer border-b-2 border-gray-500 w-full py-3">
                            <div className="flex justify-start text-start">
                                <a href="#home" className="w-32 font-bold " onClick={() => select(4)} ><FontAwesomeIcon icon={faHome} className="mr-8 fa-xl" />Home</a>
                            </div>
                        </li>
                        <li className="flex justify-center icon-hover cursor-pointer items-start border-b-2 w-full py-3 border-gray-500">
                            <div className="flex justify-start text-start">
                                <a href="#about" className="w-32 font-bold " onClick={() => select(5)} ><FontAwesomeIcon icon={faUser} className="mr-8 fa-xl ml-[3px]" />About</a>
                            </div>
                        </li>
                        <li className="flex justify-center icon-hover cursor-pointer border-b-2 w-full py-3 border-gray-500">
                            <div className="flex justify-start text-start">
                                <a href="#portfolio" className="w-32 font-bold" onClick={() => select(6)} ><FontAwesomeIcon icon={faBookBookmark} className="mr-8 fa-xl ml-[3px]" />Portfolio</a>
                            </div>
                        </li>
                        <li className="flex justify-center icon-hover cursor-pointer w-full py-3 ">
                            <div className="flex justify-start text-start">
                                <a href="#contact" className="w-32 font-bold" onClick={() => select(7)} ><FontAwesomeIcon icon={faIdCardClip} className="mr-8 fa-xl" />Contact</a>
                            </div>
                        </li>
                    </ul>
                )}

        </section>
    );
}


export default Navbar