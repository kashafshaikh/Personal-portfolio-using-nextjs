export default function Contact() {
    return (
        <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-24 xl:mx-48'> {/* Adjusted margins for smaller screens */}
            <h3 className="my-8 py-4 text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold hover:underline tracking-wider font-kaushan text-white">
                Contact Me
            </h3>
   
            <div className='rounded-2xl border-white border-y-[4px] my-20 p-6 sm:p-6 md:p-8 lg:p-10 shadow-lg transition-transform transform hover:scale-105'>
                <p className='my-8 sm:my-8 md:my-14 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-white px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48'>
                    Feel free to reach out if you have any questions, want to collaborate, or just want to connect. I&apos;m always open to interesting conversations and opportunities!
                </p>

                <h3 className='text-center text-white text-[30px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-kaushan tracking-wider'>
                    Contact Details
                </h3>
             
                <div className="my-8 sm:my-8 text-center">
                    <p className="text-white text-lg sm:text-lg md:text-xl">📧 Email: billushaikhshaikh@gmail.com</p>
                    <p className="text-white text-lg sm:text-lg md:text-xl">📍 Location: Karachi, Pakistan</p>
                </div> 
            </div>
     </div>
    )
}

