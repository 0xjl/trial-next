import React from 'react'
import Link from 'next/link'

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
	return (
		<footer className="px-4 divide-y bg-[#002401] text-[#bddebd]">
			<div className="max-w-[1440px] flex justify-between py-10 mx-auto">
				<Link href="#" className="flex justify-center space-x-3">
					Rising Tiger Enterprises
				</Link>
				<div>
					<button onClick={scrollToTop} className=''>Back To Top</button>
				</div>
			</div>
			<div className="py-6 text-sm text-center text-gray-400">Designed & Developed by 0xjdl</div>
		</footer>
	)
}

export default Footer