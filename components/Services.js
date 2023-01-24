import React, {useEffect}from 'react'
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = () => {
	useEffect(() => {
		AOS.init();
	  }, [])
  return (
    <section id="services" className="p-4 lg:p-8 text-[#004b01] bg-top bg-cover bg-no-repeat xl:bg-[url('/divider-2.svg')]">
            <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md lg:flex-row-reverse">
            <Image className='rounded-lg mx-auto md:max-w-md xl:max-w-2xl border-4 ring-offset-gray-500 outline-offset-4'
              src={"/jiaherb.jpg"}
              width="0"
              height="0"
              sizes='100vw'
              style={{width: "100%", height: "auto"}}
              alt="image of a boat full of shipping containers"
              data-aos="fade-right"
              data-aos-delay="300"
			  data-aos-anchor-placement="bottom-bottom"
              />
              <div className="flex flex-col justify-center flex-1 p-6" data-aos="fade-right"
              data-aos-delay="300" data-aos-anchor-placement="bottom-bottom">
                <h3 className="text-4xl text-center font-bold text-[#214733] xl:text-[#bddebd]">Jiaherb</h3>
                <p className="text-2xl my-6 lg:mx-10 text-center text-[#214733] xl:text-[#bddebd]">We are an Official Distributor of Jiaherb, a world leading company in the manufacturing of botanical extracts and its derivatives.

                </p>
              </div>
              </div>
	          </div>
          </section>
  )
}

export default Services