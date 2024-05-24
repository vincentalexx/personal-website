import { faDiscord, faGit, faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './component.css';

const Footer = () => {
    return (
        <section id="contact">
            <div className="bg-black justify-center">
                <div className="h-12"></div>
                <p className="flex text-4xl justify-center mb-11 tracking-wider" >Contact</p>
                <ul className="justify-center flex space-x-10 md:space-x-28">
                    <li className="justify-center">
                        <a href="https://github.com/vincentalexx" className="icon-hover text-center"><FontAwesomeIcon icon={faGithub} size="" className="text-4xl github" />
                            <p className="text-base">Github</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/vincent-alexander-haris/" className="icon-hover text-center"><FontAwesomeIcon icon={faLinkedin} size="" className="text-4xl linkedin" />
                            <p className="text-base">LinkedIn</p>
                        </a>
                    </li>
                    <li className="">
                        <a href="https://www.instagram.com/vincentalexx/" className="icon-hover justify-center text-center"><FontAwesomeIcon icon={faInstagram} className="text-4xl insta" />
                            <p className="text-base">Instagram</p>
                        </a>
                    </li>
                </ul>
                 
                {/* flex space-y-8 md:flex-col justify-center md:space-x-32 md:space-y-0 */}
                <ul className="md:flex justify-center md:space-x-16 space-y-3 md:space-y-0 mt-7">
                    {/* <li className="flex justify-center space-x-2">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" /> <p className="text-base font-bold ">+62 8172399168</p>
                    </li> */}
                    <li className="flex justify-center space-x-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-2xl" /> <p className="text-base font-bold">vincentalexx03@gmail.com</p>
                    </li>
                    <li className="flex justify-center space-x-2">
                        <FontAwesomeIcon icon={faDiscord} className="text-2xl" /> <p className="text-base font-bold">vincentalexx</p>
                    </li>
                </ul>
                <div className="h-12"></div>
            </div>
            <p className="text-center py-2">vincentalexx @ 2023</p>
        </section>
    );
}

export default Footer