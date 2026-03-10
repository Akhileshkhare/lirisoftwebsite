import React from "react";
import { Link } from "react-router-dom";
import MyChatboat from "./chatboat/MyChatboat";
// import Customebot from "./customeChatbot/Customebot";

export default function Footer() {
  return (
    <section className='w-full flex flex-col md:flex-row items-center justify-center text-gray-500 space-x-0 md:space-x-14 px-2 md:px-0 bg-gray-100 h-[72px]'>
      <p>&copy; {new Date().getFullYear()} Lirisoft.</p>
      <div className='flex items-center space-x-6 mt-2 md:mt-0'>
        <Link to="/terms-of-service" className=" hover:text-blue-900">Terms and service</Link>
        <Link to="/privacy-policy" className=" hover:text-blue-900">Privacy Policy</Link>
        {/* <span>Language</span> */}
        <MyChatboat></MyChatboat>
          {/* <Customebot></Customebot> */}
      </div>
    </section>
  )
}
