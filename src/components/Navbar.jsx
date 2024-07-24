import React from 'react';
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='flex h-20 items-center justify-between'>
                <div className='flex flex-1 items-center justify-center md:items-stretch ms:justify-start'>
                    <a href="/index.html" className='flex flex-shrink-0 items-center mr-4'>
                        <img className='h-10 w-auto' src={logo} alt="React jobs" />
                        <span className='hidden md:block text-white text-2xl font-bold ml-2'>React jobs</span>
                    </a>
                    <div className='md:ml-auto'>
                        <div className='flex space-x-2'>
                            <a href="/index.html" className='text-white bg-black'>Home</a>
                            <a href="/index.html" className='text-white'> Jobs </a>
                            <a href="/index.html" className='text-white'> Add Jobs</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </nav>
  )
}

export default Navbar