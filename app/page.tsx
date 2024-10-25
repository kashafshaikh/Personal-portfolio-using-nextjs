"use client";

import Image from "next/image";
import {TypeAnimation} from 'react-type-animation';
import About from "./about/page";
import Contact from "./contact/page";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <div className="container mx-auto py-4 px-12 pt-32">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Hello, I am{""} </span>
                        <br></br>
                         <TypeAnimation
                         sequence={[
                          'Kashaf Shaikh',
                          1000,
                          'Student of GIAIC',
                          1000,
                          'Frontend Developer',
                          1000,
                         ]}
                         wrapper="span"
                         speed={50}
                         repeat={Infinity}
                         />
                           
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-md lg:text-xl mb-6">
                    Hi, I&apos;m Kashaf Shaikh, a beginner frontend developer with a growing passion for creating dynamic web applications.  currently exploring TypeScript, Tailwind CSS, and Next.js, building my skills as I progress. I love the challenge of learning new technologies and am excited to see how I can apply them to real-world projects.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Hire me</button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span></button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0 mb-6">
                    <div className="rounded-full bg-[#181818] w-[380px] h-[380px] lg:w-[450px] lg:h-[450px] relative overflow-hidden mt-6">
                        <Image
                            src="/myAvatar.jpeg"
                            alt="my-image"
                            height={200}
                            width={230}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[50%]"
                        />
                    </div>
                </div>
            </div>
         </div>
         <About/>
         <Contact/>
        </main>
    );
}


