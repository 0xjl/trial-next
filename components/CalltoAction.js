import React from 'react'
import Link from 'next/link'

const CalltoAction = () => {
  return (
    <section className="py-6 bg-gradient-to-r from-[#cccce6] to-[#f3f3ff] text-gray-900 shadow-2xl">
	<div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
		<h1 className="text-5xl text-[#004b01] font-bold leading-none text-center">Check Out Our Catalogue!</h1>
        <Link href="/products">   
        <button className="px-8 py-3 text-lg font-semibold rounded bg-[#003802] hover:bg-[#004b01] hover:text-green-200 text-gray-50">Products</button>  </Link>
        </div>
    </section>
  )
}

export default CalltoAction