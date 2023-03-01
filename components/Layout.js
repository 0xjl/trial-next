import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Layout = ({ children }) => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

return(
    <>
        <Head>
            <title>RTE</title>
        </Head>
        <nav className="font-[300] w-full z-2 bg-[#002401] text-[#bddebd]">
            <div className='max-w-[1440px] mx-auto flex justify-between items-center p-4 ease-in-out duration-500'>
                <Link href="/" passHref>
                    <h1 className='text-xl lg:text-4xl leading-tighter text-center md:text-left'>
                        <span>
                            Rising Tiger Enterprises Inc.
                        </span>
                    </h1>
                </Link>
                <ul className='hidden md:flex ease-in-out duration-500'>
                    <li className='p-4'>
                        <Link href="/" className='relative before:content-[""] before:absolute before:block before:w-full before:h-[3px] before:top-6 before:left-0 before:bg-green-800
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300'>
                            Home
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link href="/#about-us" className='relative before:content-[""] before:absolute before:block before:w-full before:h-[3px] before:top-6 before:left-0 before:bg-green-800
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300' >
                            About Us
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link href="/#services" className='relative before:content-[""] before:absolute before:block before:w-full before:h-[3px] before:top-6 before:left-0 before:bg-green-800
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300'>
                            Jiaherb
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link href="/products" className='relative before:content-[""] before:absolute before:block before:w-full before:h-[3px] before:top-6 before:left-0 before:bg-green-800
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300'>
                            Products
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link href="/#contact" className='relative before:content-[""] before:absolute before:block before:w-full before:h-[3px] before:top-6 before:left-0 before:bg-green-800
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300'>
                            Contact
                        </Link>
                    </li>
                </ul>
                {/* Mobile Button */}
                <div onClick={handleNav} className='block sm:hidden z-50'>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
                {/* Mobile Menu */}
                <div className={
                    nav
                        ? `sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 z-[49]`
                        : `sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 z-[49]`
                }>
                    <ul className=''>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link  scroll={false} href="/#about">
                                About Us
                            </Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link  scroll={false} href="/#jiaherb">
                                Jiaherb
                            </Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href="/products">
                                Products
                            </Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link  scroll={false} href="/#contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>    
            </div>
        </nav>
        <main className="min-h-[80vh] from-[#7bb286] to-[#c1c1d9]">
            <div className='max-w-[1440px] flex justify-center items-center bg-transparent mx-auto rounded-lg p-8'>
                <div className="text-2xl font-mediam w-full">{children}</div>
            </div>
        </main>
        <Footer />
    </>
)
}

export default Layout;