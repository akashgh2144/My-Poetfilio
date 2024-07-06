import React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
const Footer = () => {
    return (

        <footer className="footer p-10 bg-slate-800  text-white  ">
            <nav >
                <header className="text-[48px] font-semibold mb-8 leading-normal uppercase text-teal-500">Akash</header>
                <p>Let's build something amazing together!</p>
            </nav>
            <nav>
                <header className="text-2xl font-semibold mb-8 leading-normal uppercase text-teal-500">SERVICES</header>
                <a className="link link-hover">Web Design</a>
                <a className="link link-hover">Web Development</a>

            </nav>
            <nav>
                <header className="text-2xl font-semibold mb-8 leading-normal uppercase text-teal-500">CONTACT</header>
                <a className="link link-hover">  Email: akashghosh12300@gmail.com</a>
                <a className="link link-hover">Phone: +8801303136965</a>

            </nav>
            <nav>
                <header className="text-2xl font-semibold mb-8 leading-normal uppercase text-teal-500">FOLLOW ME</header>
                <div className="grid grid-flow-col gap-4">
                    <div className="flex space-x-2">
                        <a href="https://github.com/akashgh2144" className="text-teal-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            <AiFillGithub className="text-[28px]" />
                        </a>
                        <a href="www.linkedin.com/in/akash-kumar-94538028b" className="text-teal-600 hover:text-teal-500 rounded-full glow p-2">
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
            </nav>
        </footer>

    );
};

export default Footer;
