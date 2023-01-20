import React from 'react'
import Image from 'next/image';

const Services = () => {
  return (
    <section id="services" className="m-4 md:m-8 text-[#004b01]">
	<div className="container mx-auto p-4 my-6 space-y-2 text-center">
		<h2 className="text-5xl font-bold">Services</h2>
	</div>
	<div className="container mx-auto grid justify-center gap-1 sm:grid-cols-1 lg:grid-cols-3">
		<div className="flex flex-col items-center p-4">
		<Image 
              className="rounded-full hover:scale-110 ease-in duration-300"
              src={"/service1.jpg"}
              width="0"
              height="0"
              sizes="100%"
              style={{ width: '200px', height: '200px' }}
              />
			<h2 className="my-3 text-3xl font-semibold">Plant Extracts</h2>
			<div className="space-y-1 leading-tight text-center">
				<p>We buy and sell a wide variety of plant extracts</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
		<Image 
              className="rounded-full hover:scale-110 ease-in duration-300"
              src={"/service2.jpg"}
              width="0"
              height="0"
              sizes="100%"
              style={{ width: '200px', height: '200px' }}
              />
			<h2 className="my-3 text-3xl font-semibold">Plant Powders</h2>
			<div className="space-y-1 leading-tight text-center">
				<h4>We also trade a variety of plant powder extracts</h4>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
		<Image 
              className="rounded-full hover:scale-110 ease-in duration-300"
              src={"/service3.jpg"}
              width="0"
              height="0"
              sizes="100%"
              style={{ width: '200px', height: '200px' }}
              />
			<h2 className="my-3 text-3xl font-semibold">Organic Compounds</h2>
			<div className="space-y-1 leading-tight text-center">
				<p>We also trade in amino acids/BCAAs acids/BCAAs.</p>
			</div>
		</div>
	</div>
</section>
  )
}

export default Services