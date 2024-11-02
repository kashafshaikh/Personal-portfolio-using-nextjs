"use client";
import Image from "next/image";

export default function About(){
    return(
        <section className="text-white mt-16">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 lg:mx-28">
                <Image src="/about-image.png" alt="about-image" width={500} height={500} className="mt-12"/>
                <div className="ml-6">
                    <h1 className="text-4xl font-bold text-white my-8">About me</h1>
                    <p className="text-base lg:text-lg text-[#ADB7BE]">👋 Hi, I&apos;m Kashaf Shaikh, a passionate frontend developer with a focus on creating dynamic and visually appealing web applications. I&apos;m currently building my skills in TypeScript, Tailwind CSS, and Next.js, exploring the exciting world of frontend development. Though I&apos;m a beginner in these technologies, I&apos;m always eager to learn, grow, and take on new challenges that help me develop as a professional. Let&apos;s build something amazing together!</p>
                    <h2 className="text-4xl font-bold text-white my-8">Education</h2>
                    <ul className="list-disc text-[#ADB7BE]">
                           <li>Completed matriculation in Bio Science.</li>
                           <li>Pursued an IT Essentials course with a Cisco certification.</li>
                           <li>Gained knowledge in computer hardware, software, and networking.</li>
                           <li>Developed a passion for technology and development.</li>
                       </ul>
            </div>
        </div>
        </section>
    )}























