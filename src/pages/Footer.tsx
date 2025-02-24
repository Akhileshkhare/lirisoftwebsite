import React from 'react'

export default function Footer() {
  return (
    <section className='w-full flex flex-col md:flex-row items-center justify-center text-gray-500 space-x-0 md:space-x-14 px-2 md:px-0 bg-gray-100 h-[72px]'>
    <p>&copy; {new Date().getFullYear()} Lirisoft.</p>
    <div className='flex items-center space-x-6 mt-2 md:mt-0'>
        <span>Term of Service</span>
        <span>Privacy Policy</span>
        <span>Language</span>
    </div>
</section>

  )
}
