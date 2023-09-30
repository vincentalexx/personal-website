import { faDiscord, faGit, faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './component.css';

const Footer = () => {
    return (
        <section id="contact">
            <div className="justify-center mb-12">
                <p className="flex text-2xl justify-center" >CONTACT</p>
                <br />
                <ul className="justify-center flex space-x-28">
                    <li className="justify-center">
                        <a href="https://github.com/vincentalexx" className="icon-hover"><FontAwesomeIcon icon={faGithub} size="" className="text-4xl github" />
                            <p className="text-base">Github</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/vincent-alexander-haris/" className="icon-hover"><FontAwesomeIcon icon={faLinkedin} size="" className="text-4xl linkedin" />
                            <p className="text-base">LinkedId</p>
                        </a>
                    </li>
                    <li className="">
                    <a href="" className="icon-hover justify-center"><FontAwesomeIcon icon={faInstagram} className="text-4xl insta" />
                            <p className="text-base">Instagram</p>
                        </a>
                    </li>
                </ul>
                 
                {/* flex space-y-8 md:flex-col justify-center md:space-x-32 md:space-y-0 */}
                <ul className="lg:flex justify-center lg:space-x-16 space-y-3 lg:space-y-0 mt-7">
                    <li className="flex justify-center space-x-2">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" /> <p className="text-base font-bold ">+62 8172399168</p>
                    </li>
                    <li className="flex justify-center space-x-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-2xl" /> <p className="text-base font-bold">@vincentalexx03@gmail.com</p>
                    </li>
                    <li className="flex justify-center space-x-2">
                        <FontAwesomeIcon icon={faDiscord} className="text-2xl" /> <p className="text-base font-bold">vincentalexx</p>
                    </li>
                </ul>
            </div>
        </section   >
    );
}

export default Footer