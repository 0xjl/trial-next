import React from 'react'
import Link from 'next/link'

const CalltoAction = () => {
  return (
    <section className="py-6 bg-[#002401] shadow-2xl">
	  <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
		<h1 className="text-5xl text-[#bddebd] font-bold leading-none text-center">Check Out Our Catalogue!</h1>
        <Link href="/products">   
        <button className="duration-300 ease-in px-8 py-3 text-lg font-semibold rounded bg-[#004b01] text-[#bddebd] hover:bg-green-700 hover:text-[#002401]">Products</button>  </Link>
        </div>
    </section>
  )
}

export default CalltoAction