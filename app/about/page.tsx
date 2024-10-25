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





























// import Image from 'next/image';

// export default function About(){
//     return (
//      <div className='mx-4 md:mx-12 lg:mx-24 xl:mx-48'>

//             <h3 className="my-8 py-4 text-center text-3xl md:text-4xl lg:text-5xl font-semibold hover:underline tracking-wider font-kaushan text-white"> About Me </h3>

//             <Image src="/myAvatar.jpeg" alt="my Avatar" width={200} height={100} className="mx-auto my-14  border-white border-y-[4px] rounded-3xl"/>

//             <div className='rounded-2xl border-white border-y-[4px] p-6 md:p-8 shadow-lg transition-transform transform hover:scale-105'>

//             <h3 className='text-white text-center text-[30px] md:text-[35px] lg:text-[40px] font-kaushan tracking-wider'>I am Kashaf</h3>  

//             <p className='my-10 md:my-14 text-[16px] md:text-[18px] lg:text-[20px] text-white px-4 md:px-12 lg:px-24 xl:px-48'>👋 Hi, I&apos;m Kashaf Shaikh, a student of Giaic and a passionate frontend developer with a focus on creating dynamic and visually appealing web applications. I&apos;m currently building my skills in TypeScript, Tailwind CSS, and Next.js, exploring the exciting world of frontend development. Though I&apos;m a beginner in these technologies, I&apos;m always eager to learn, grow, and take on new challenges that help me develop as a professional. Let&apos;s build something amazing together!</p>
            
//             <h3 className='text-white text-center text-[30px] md:text-[35px] lg:text-[40px] font-kaushan tracking-wider'>Education</h3>  

//             <div className='text-white my-10 md:my-14 text-[16px] md:text-[18px] lg:text-[20px] px-4 md:px-12 lg:px-24 xl:px-48'>
//             <ul className="list-disc ml-6">
//                         <li>Completed matriculation in Bio Science.</li>
//                         <li>Pursued an IT Essentials course with a Cisco certification.</li>
//                         <li>Gained knowledge in computer hardware, software, and networking.</li>
//                         <li>Developed a passion for technology and development.</li>
//                     </ul>
//             </div>
//          </div>
//      </div>
//     )
// }

