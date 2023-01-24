import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer'

const Layout = ({children}) => (
    <>
        <Head>
            <title>RTE</title>
        </Head>
        <nav className="w-full z-2 bg-[#002401] text-[#bddebd]">
            <div className='max-w-[1420px] mx-auto flex justify-between items-center p-4 ease-in-out duration-500'>
                <Link href="/" passHref>
                <h1 className='text-5xl font-semibold leading-tighter'>
        <span className='animate-text bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-teal-200'>
        Products
        </span>
      </h1>
                </Link>
                <ul  className='hidden sm:flex ease-in-out duration-500'>
                    <li className='p-4'>
                        <Link href="/">
                        Home
                        </Link>
                    </li>
                </ul>
           </div>
        </nav>
        <main className="min-h-[80vh] bg-top bg-contain bg-no-repeat xl:bg-[url('/products-bg.svg')] from-[#7bb286] to-[#c1c1d9]">
            <div className='max-w-[1440px] flex justify-center items-center bg-transparent mx-auto rounded-lg p-8'>
            <div className="text-2xl font-mediam w-full">{children}</div>
            </div>
        </main>
        <Footer/>
    </>
)

export default Layout;