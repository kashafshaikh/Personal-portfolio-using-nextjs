
"use client"; 
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact Us: Message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = `mailto:billushaikhshaikh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section>
      <div className="text-white relative top-[100px] px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl text-center font-bold mb-[30px] md:mb-[100px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          CONTACT US
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[500px] w-full md:gap-0">
          <div className="flex items-center flex-col mx-6 md:mx-12 my-6 md:my-16 px-6 md:px-12 text-center md:text-justify text-[#ADB7BE]">
            <p className='mt-4 md:mt-6 text-base md:text-lg'>
              Feel free to reach out if you have any questions, want to collaborate, or just want to connect. I&apos;m always open to interesting conversations and opportunities!
            </p>

            <div className="pt-6 md:pt-8 text-md px-2 md:px-4 mx-2 md:mx-4">
              <p className="">📧 Email: billushaikhshaikh@gmail.com</p>
              <p className="">📍 Location: Karachi, Pakistan</p>
            </div> 
          </div>

          <div className="bg-[#121212] shadow-2xl p-4 md:p-6 lg:p-8 md:mr-[50px] lg:mr-[100px] flex flex-col justify-center">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl my-4 md:my-8 lg:mt-6 lg:mb-0 text-center">
              GET IN TOUCH
            </h1>
          
            <form className="gap-4 md:gap-5 grid grid-cols-1 sm:m-2 md:m-4 lg:m-12" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#121212] border-pink-900 border-[2px] md:border-[3px] px-6 py-3 md:px-8 md:py-4 rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#121212] border-pink-900 border-[2px] md:border-[3px] px-6 py-3 md:px-8 md:py-4 rounded-lg"
                required
              />
              <textarea
                name="message"
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-[#121212] border-pink-900 border-[2px] md:border-[3px] px-6 py-5 md:px-9 md:py-8 rounded-lg"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white py-2 md:py-3 px-6 md:px-9 rounded-full font-semibold shadow-lg transition-all mb-4 md:mb-6"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="pb-10 md:pb-20"></div>
      </div>
    </section>
  );
}





