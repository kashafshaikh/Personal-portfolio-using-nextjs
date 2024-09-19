'use client';
import About from "./about/page";
import Contact from "./contact/page";
import { useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import Image from 'next/image';

export default function Mypage() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
            <div className={`rounded-2xl border-white border-y-[6px] p-4 my-14 lg:px-48 px-5 sm:px-20 md:px-32 text-center ${isDarkMode ? 'bg-black' : 'bg-gray-900'}`}>
                <Image src="/myAvatar.jpeg" alt="my Avatar" width={200} height={100} className="mx-auto rounded-3xl border-y-[4px] border-white" />
                <h3 className="my-4 text-5xl font-semibold tracking-wider font-kaushan text-green-600">
                    <span className="text-sky-700">Kashaf </span>
                    Shaikh
                </h3>

                <p className="px-2 py-1 my-3 bg-gray-300 text-[20px] font-semibold rounded-full text-black">Student of Giaic</p>

                {/* Social icons */}
                <div className="flex justify-around my-5 w-9/12 md:w-full mx-auto">
                    <a href="">
                        <FaInstagram className="w-8 h-8 text-pink-700 cursor-pointer" />
                    </a>
                    <a href="">
                        <AiFillGithub className="w-8 h-8 text-fuchsia-700 cursor-pointer" />
                    </a>
                    <a href="">
                        <AiFillLinkedin className="w-8 h-8 text-blue-700 cursor-pointer" />
                    </a>
                </div>

                <div className="my-5 py-8 px-2 bg-gray-300 font-semibold text-[20px] text-black shadow-lg transition-transform transform hover:scale-105" >

                <p> Hi, I'm Kashaf Shaikh, a beginner frontend developer with a growing passion for creating dynamic web applications. I’m currently exploring TypeScript, Tailwind CSS, and Next.js, building my skills as I progress. I love the challenge of learning new technologies and am excited to see how I can apply them to real-world projects. </p>  
                </div>

                {/* Toggle Theme button */}
                <button className="bg-gradient-to-r from-green-500 to-blue-500 w-8/12 rounded-full py-2 px-5 my-2 text-white"
                    onClick={toggleTheme}>
                    Toggle Theme
                </button>
                <About/>
                <Contact/>
            </div>
    );
}










