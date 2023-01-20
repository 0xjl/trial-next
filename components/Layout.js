import Head from 'next/head';
import Link from 'next/link';

const Layout = ({children}) => (
    <>
        <Head>
            <title>RTE</title>
        </Head>
        <nav  className="w-full z-2">
            <div className='max-w-[1440px] mx-auto flex justify-between items-center p-4 text-white ease-in-out duration-500'>
                <Link href="/" passHref>
                        <h1  className='font-bold text-4xl ease-in-out duration-500'>Rising Tiger Enterprises</h1>
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
        <main className='min-h-[110vh]'>
            <div className='flex justify-center items-center bg-white mx-auto w-2/4 rounded-lg my-16 p-16'>
            <div className="text-2xl font-mediam w-full">{children}</div>
            </div>
        </main>
    </>
)

export default Layout;