import React, { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Jiaherb = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="jiaherb" data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top-center">
      <div className="container mx-auto lg:pt-24">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-8/12 px-4 text-[#214733]">
            <h2 className="text-5xl font-bold ">Jiaherb</h2>
            <p className='md:text-xl lg:text-2xl my-2 lg:my-6 lg:mx-20 font-medium text-[#214733]'>
              a world leading company in the manufacturer and exporter of botanical extracts and derivatives
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto space-y-2 lg:space-y-12 pt-0 lg:pt-[4em]">
        <div className="flex flex-col overflow-hidden rounded-md lg:flex-row-reverse">
          <div className='p-2'>
            <Image className='rounded-lg mx-auto md:max-w-md xl:max-w-2xl border-4 ring-offset-gray-500 outline-offset-4'
              src={"/core2.jpg"}
              width="0"
              height="0"
              sizes='100vw'
              style={{ width: "100%", height: "auto" }}
              alt="image of a boat full of shipping containers"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-anchor-placement="top-bottom"
            />
          </div>
          <div className="flex flex-col justify-center text-center flex-1 p-6 mt-2" data-aos="fade-right"
            data-aos-delay="300" data-aos-anchor-placement="top-bottom">
            <h3 className="text-4xl font-bold text-[#214733]">Certifications</h3>
            <p className="md:text-xl lg:text-2xl my-2 lg:my-6 lg:mx-20 font-medium text-[#214733]">
              JIAHERB carries HALAL, CFDA-GMP, NSF-cGMP, HACCP, FSSC22000, ISO22000, ISO9001, ISO17025, USDA, ORGANIC certifications.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto space-y-2 lg:space-y-12 pt-0 lg:pt-[4em]">
        <div className="flex flex-col overflow-hidden rounded-md lg:flex-row">
          <div className='p-2'>
            <Image className='rounded-lg mx-auto md:max-w-md xl:max-w-2xl border-4 ring-offset-gray-500 outline-offset-4'
              src={"/core2.jpg"}
              width="0"
              height="0"
              sizes='100vw'
              style={{ width: "100%", height: "auto" }}
              alt="image of a boat full of shipping containers"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-anchor-placement="top-bottom"
            />
          </div>
          <div className="flex flex-col justify-center text-center flex-1 p-6 mt-2" data-aos="fade-right"
            data-aos-delay="300" data-aos-anchor-placement="top-bottom">
            <h3 className="text-4xl font-bold text-[#214733]">Certifications</h3>
            <p className="md:text-xl lg:text-2xl my-2 lg:my-6 lg:mx-20 font-medium text-[#214733]">
              JIAHERB carries HALAL, CFDA-GMP, NSF-cGMP, HACCP, FSSC22000, ISO22000, ISO9001, ISO17025, USDA, ORGANIC certifications.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:pt-24">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-8/12 px-4 text-[#214733]">
            <p className='md:text-xl lg:text-2xl my-2 lg:my-6 lg:mx-20 font-medium text-[#214733]'>
              More about Jiaherb
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:space-y-12 pt-[1em]">
        <div className="flex flex-col justify-center overflow-hidden rounded-md lg:flex-row">
          <div className=" mb-4 p-0 sm:p-4 md:w-[450px]">
            {/* Card container */}
            <div className="bg-[#002407] text-[#bddebd] group h-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">

              {/* :CARD IMAGE */}
              <div className='overflow-hidden'>
              <Image 
              className="lg:h-48 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105" 
              src={"/jiaherb1.JPG"} 
              width="0"
              height="0"
              sizes='100vw'
              style={{ width: "100%", height: "auto" }}
              alt="blog" 
              />
              </div>
              {/* :CARD CATEGORY */}
              <h2 className="pt-4 pb-1 px-6 inline-block text-xs title-font font-semibold text-[#214726] uppercase tracking-widest cursor-pointer hover:font-bold">Building</h2>

              {/* :CARD BODY */}
              <div className="py-1 px-6">
                {/* ::Card title */}
                <h1 className="mb-3 inline-block title-font text-xl  text-[#589c58] font-extrabold  tracking-wide cursor-pointer">Category 1</h1>
                {/* ::Card excerpt */}
                <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, illum cum autem incidunt magni voluptatum alias reiciendis possimus doloremque, enim consequuntur quia. Voluptas exercitationem soluta debitis labore aliquam molestiae illum?</p>
              </div>

            </div>
          </div>
          <div className="mb-4 p-0 sm:p-4 md:w-[450px]">
            {/* Card container */}
            <div className="bg-[#002401] text-[#bddebd] group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">

             {/* :CARD IMAGE */}
              <div className='overflow-hidden'>
              <Image src={"/jiaherb2.jpg"}  width="0"
              height="0"
              sizes='100vw'
              style={{ width: "100%", height: "auto" }}
              alt="blog"  className="lg:h-48 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105"  />
              </div>
              {/* :CARD CATEGORY */}
              <h2 className="pt-4 pb-1 px-6 inline-block text-xs title-font font-semibold text-[#589c58] uppercase tracking-widest cursor-pointer hover:font-bold">Manufacturing</h2>

              {/* :CARD BODY */}
              <div className="py-1 px-6">
                {/* ::Card title */}
                <h1 className="mb-3 inline-block title-font text-xl font-extrabold  tracking-wide cursor-pointer">Category 2</h1>
                {/* ::Card excerpt */}
                <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed cursor-pointer">has established an advanced quality management and control system to
ensure that the production process and product quality meet GMP
requirements.</p>
              </div>

              
            </div>
          </div>
          <div className="mb-4 p-0 sm:p-4 md:w-[450px]">
            {/* Card container */}
            <div className="bg-[#002401] text-[#bddebd] group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">

             {/* :CARD IMAGE */}
              <div className='overflow-hidden'>
              <Image src={"/jiaherb3.png"}  width="0"
              height="0"
              sizes='100vw'
              style={{ width: "100%", height: "auto" }}
              alt="blog"  className="lg:h-48 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105" />
              </div>
              {/* :CARD CATEGORY */}
              <h2 className="pt-4 pb-1 px-6 inline-block text-xs title-font font-semibold text-[#589c58] uppercase tracking-widest cursor-pointer hover:font-bold">Certifications</h2>

              {/* :CARD BODY */}
              <div className="py-1 px-6">
                {/* ::Card title */}
                <h1 className="mb-3 inline-block title-font text-xl font-extrabold  tracking-wide cursor-pointer">Full Global Certification</h1>
                {/* ::Card excerpt */}
                <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed cursor-pointer">JIAHERB carries HALAL, CFDA-GMP, NSF-cGMP, HACCP, FSSC22000, ISO22000, ISO9001, ISO17025, USDA, ORGANIC certifications.</p>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jiaherb;