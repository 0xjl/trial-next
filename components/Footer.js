import React from 'react'

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-[#002401]  text-gray-100">
	<div className="container flex sm:flex-col md:flex-row justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				<span className="self-center font-semibold sm:text-lg md:text-2xl">Rising Tiger Enterprises</span>
			</a>
				<ul className="flex sm:flex-col md:flex-row">
					<li className='p-4'>
						<a rel="noopener noreferrer" href="#">Home</a>
					</li>
					<li className='p-4'>
						<a rel="noopener noreferrer" href="#">Products</a>
					</li>
				</ul>
			
		
	</div>
	<div className="py-6 text-sm text-center text-gray-400">Design and developed by 0xjdl</div>
</footer>
  )
}

export default Footer