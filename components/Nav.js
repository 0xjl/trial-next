import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { scroller } from 'react-scroll'

const Nav = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState("transparent")
    const [textColor, setTextColor] = useState("white")

    const scrollToAbout = () => {
        scroller.scrollTo('about-us', {
          duration: 800,
          offset: -90,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
        handleNav()
      }

      const scrollToServices = () => {
        scroller.scrollTo('services', {
          duration: 800,
          offset: -100,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
        handleNav()
      }

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(()=>{
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('#002401')
                setTextColor('#bddebd')
            } else {
                setColor('transparent')
                setTextColor('#ffffff')
            }
        }
        window.addEventListener('scroll', changeColor)
    })

    return (
        <nav style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in-out duration-500">
            <div className='max-w-[1440px] mx-auto flex justify-between items-center p-4 text-white ease-in-out duration-500'>
                <Link href="/" passHref>
                        <h1 style={{color: `${textColor}`}} className='font-bold text-4xl ease-in-out duration-500'>Rising Tiger Enterprises</h1>
                </Link>
                <ul style={{color: `${textColor}`}} className='hidden sm:flex ease-in-out duration-500'>
                    <li className='p-4'>
                        <Link href="/">
                        Home
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link onClick={scrollToAbout} scroll={false} href="#about-us" >
                        About
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link onClick={scrollToServices} scroll={false} href="#services" >
                        Services
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link href="/products">
                        Products
                        </Link>
                    </li>
                </ul>

                {/* Mobile Button */}
                <div onClick={handleNav} className='block sm:hidden z-10'>
                   {nav ? <AiOutlineClose size={30} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={30} style={{color: `${textColor}`}} /> }
                </div>
                {/* Mobile Menu */}
                <div style={{color: `${textColor}`}} className={
                    nav 
                    ? `sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 `
                    : `sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300`
                }>
                    <ul style={{color: `${textColor}`}}>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href="/">
                            Home
                            </Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link onClick={scrollToAbout} scroll={false} href="#about">
                            About
                            </Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link onClick={scrollToServices} scroll={false} href="#services">
                            About
                            </Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href="/products">
                            Products
                            </Link>
                        </li>
                    </ul>
                </div>
           </div>
        </nav>
    )
}

export default Nav;