import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-solid-svg-icons/faX";

export default function Modal({open, onClose, portfolio}) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div className={`fixed inset-0 z-40 flex justify-center items-center transition-colors ${open ? "visible bg-black/60" : "invisible"} `}>
            <div onClick={(e) => e.stopPropagation()} className={`bg-gray-800 rounded-lg shadow p-10 flex flex-col justify-center items-center transition-all cursor-default w-[85vw] lg:w-[70vw] lg:h-[80vh] gap-5 ${open? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <FontAwesomeIcon  onClick={onClose} icon={faXmarkCircle} className="text-2xl text-white absolute top-5 right-5 cursor-pointer hover:text-gray-500 transition-all 0.3s ease-out" />
                <p className="font-bold text-4xl text-white tracking-wider">{portfolio.name}</p>
                <div className="text-white z-50 ">
                    <div className="w-[70vw] lg:w-[50vw] p-[0.5px] border rounded-md">
                        <Slider {...settings}>
                            {portfolio.image.map((img) => {
                                return (
                                    <div key={img} className="w-full h-full flex justify-center items-center">
                                        <img src={`/image/${portfolio.name}/${img}.png`} alt={portfolio.name}className="object-contain w-full h-full" />
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
                <div className="max-w-[50vw] text-white">
                    <p>{portfolio.description}</p>
                    <div className="flex items-center justify-center mt-2">
                        <a href={portfolio.link} className="flex items-center justify-center underline underline-offset-2 "><FontAwesomeIcon icon={faGithub} className="text-2xl ms-0 me-2" /> Repository</a >
                    </div>
                </div>
            </div>
        </div>
    )
}