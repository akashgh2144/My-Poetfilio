import { AiFillGithub } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import profileImage from '../assets/my pic.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750,
        })
    }, [])
    return (
        <div className="lg:px-36 px-8 lg:py-0 py-20 text-center gap-5
         lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className="h-full lg:py-40 flex flex-col 
            justify-center lg:items-start items-center text-white">
                <h2 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal">HI, I'M <span className="text-teal-500 uppercase">Akash Kumar Ghosh!</span> </h2>
                <p data-aos="fade-left"> I'm a dedicated MERN stack developer, transforming ideas into robust web solutions. 
                Let's build something amazing together!</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="https://github.com/akashgh2144" className="text-teal-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                <AiFillGithub className="text-[28px]" />
                            </a>
                            <a href="https://www.linkedin.com/in/akash-kumar-94538028b/" className="text-teal-600 hover:text-teal-500 rounded-full glow p-2">
                                <FaLinkedinIn className="text-[28px]" />
                            </a>
                            <a href="https://www.facebook.com/akashkumar0812?mibextid=ZbWKwL" className="text-teal-600 hover:text-teal-500 rounded-full glow p-2">
                                <FaFacebook className="text-[28px]" />
                            </a>
                           
                            <a href="https://www.instagram.com/ghosh_babu65/" className="text-teal-600 hover:text-teal-500 rounded-full glow p-2">
                                <FaInstagram className="text-[28px]" />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div> */}
            <img data-aos="fade-down" src={profileImage} className=' w-[500px] h-[300px] 
                border-2 p-1 border-teal-500 img_glow' alt="Akash_ghosh" />
            {/* </div> */}
        </div>
    );
};

export default Banner;