import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

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
            <div onClick={(e) => e.stopPropagation()} className={`bg-gray-800 rounded-lg shadow p-10 flex flex-col justify-center items-center transition-all cursor-default h-[70vh] sm:h-[80vh] md:h-[90vh] w-[85vw] lg:w-[90vw] lg:h-[80vh] gap-5 ${open? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <FontAwesomeIcon  onClick={onClose} icon={faXmarkCircle} className="text-2xl text-white absolute top-5 right-5 cursor-pointer hover:text-gray-500 transition-all 0.3s ease-out" />
                <div className="flex flex-col lg:flex-row justify-center items-center ">
                    <p className="font-bold text-4xl text-white tracking-wider lg:hidden mb-5">{portfolio.name}</p>
                    <div className="text-white z-50 mb-2">
                        <div className="w-[75vw] lg:w-[50vw] max-w-full h-fit p-[0.5px] flex flex-col">
                            <Slider {...settings} className="flex justify-center items-center border border-white object-cover w-[75vw] h-[38vw] lg:w-[45vw] lg:h-[22vw] cursor-pointer ">
                                {portfolio.image.map((img) => {
                                    return (
                                        <div key={img} className="  flex justify-center items-center object-contain w-[75vw] h-[38vw] lg:w-[45vw] lg:h-[22vw]">
                                            <img src={`/image/${portfolio.name}/${img}.png`} alt={portfolio.name} className="w-[75vw] h-[38vw] lg:w-[45vw] lg:h-[22vw]" />
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                    <div className="w-full lg:w-[30vw] lg:h-full text-white flex flex-col items-center text-center lg:items-start lg:text-left">
                        <p className="font-bold text-4xl text-white tracking-wider hidden lg:block mb-10">{portfolio.name}</p>
                        <div className="flex flex-col gap-2 lg:gap-5 items-center lg:items-start">
                            <p className="text-lg">{portfolio.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {portfolio.langs.map((lang) => {
                                    return (
                                        <div className="flex items-center gap-2 border rounded-full p-2 w-fit">
                                            <img src={`image/lang/${lang}.png`} alt={lang} className="w-5" />
                                            <p className="text-sm">{lang}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        <div className="flex items-center mt-2">
                            <a href={portfolio.link} className="flex items-center justify-center underline underline-offset-2 hover:underline-offset-4 icon-hover transition-all 3s ease-in-out "><FontAwesomeIcon icon={faGithub} className="text-2xl ms-0 me-2" /> Repository</a >
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}