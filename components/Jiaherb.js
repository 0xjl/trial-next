import React, { useEffect }from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Jiaherb = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="jiaherb" data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="center-bottom">
        
        <div className="container mx-auto lg:pt-24">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-8/12 px-4 text-[#214733]">
              <h2 className="text-5xl font-bold ">Jiaherb</h2>
              <h2 className='m-5 text-xl md:text-2xl font-semibold'></h2>
    
            </div>
          </div>
        </div>
        <div className="container mx-auto lg:space-y-12 pt-[1em]">
          <div className="flex flex-col overflow-hidden rounded-md lg:flex-row">
            <div className='p-2'>
            <Image
              className='rounded-lg mx-auto md:max-w-md xl:max-w-2xl border-4 ring-offset-gray-500 outline-offset-4'
              src={"/core1.jpg"}
              width="0"
              height="0"
              sizes='100vw'
              style={{ width: "100%", height: "auto" }}
              alt="an image of a person facing a wall of shipping containers"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-anchor-placement="top-center"
            />
            </div>
            <div className="flex flex-col justify-center text-center flex-1 p-6 mt-2" data-aos="fade-left" data-aos-delay="300" data-aos-anchor-placement="top-center">
              <h3 className="text-4xl font-bold text-[#214733]">Official Distributor of Jiaherb</h3>
              <p className="md:text-xl lg:text-2xl my-2 lg:my-6 lg:mx-20 font-semibold text-[#214733]">Rising Tiger Enterprises INC. is appointed as an Official Distributor of Jiaherb, a world leading company in the manufacturer and exporter of botanical extracts and derivatives
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
              data-aos-anchor-placement="top-center"
            />
            </div>
            <div className="flex flex-col justify-center text-center flex-1 p-6 mt-2" data-aos="fade-right"
              data-aos-delay="300" data-aos-anchor-placement="top-center">
              <h3 className="text-4xl font-bold text-[#214733]">Certifications</h3>
              <p className="md:text-xl lg:text-2xl my-2 lg:my-6 lg:mx-20 font-semibold text-[#214733]">
              JIAHERB carries HALAL, CFDA-GMP, NSF-cGMP, HACCP, FSSC22000, ISO22000, ISO9001, ISO17025, USDA, ORGANIC certifications. 
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Jiaherb;