import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id='about-us'>
      <div className="text-center bg-top overflow-visible bg-contain bg-no-repeat xl:bg-[url('/about-bg.svg')]">
          <div className='sm:pt-8 xl:pt-0 p-2'>
          <h2 className="xl:text-[#bddebd] text-6xl font-semibold lg:p-2 xl:pt-8">
          About Us
          </h2>
          </div>
          <div>
            <div className="container mx-auto pt-[8%] space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md lg:flex-row">
              <Image 
                className='rounded-lg mx-auto md:max-w-md xl:max-w-2xl border-4 ring-offset-gray-500 outline-offset-4'
                src={"/core1.jpg"}
                width="0"
                height="0"
                sizes='100vw'
                style={{width: "100%", height: "auto"}}
                alt="an image of a person facing a wall of shipping containers"
                data-aos="fade-left"
                data-aos-delay="300"
                />
              <div className="flex flex-col justify-center flex-1 p-6" data-aos="fade-left" data-aos-delay="300">
                <h3 className="text-4xl font-bold text-[#214733]">Vision</h3>
                <p className="text-2xl my-6 lg:mx-20 font-semibold text-[#214733]">To be the business partner of choice for <br/> <span className='font-bold'>Nutrition & Health</span> ingredients in the Philippines.
                </p>
                </div>
            </div>
            <div>
            </div>
            </div>
            </div>
            <div className="bg-bottom bg-cover bg-no-repeat xl:bg-[url('/divider-3.svg')]">
            <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md lg:flex-row-reverse">
            <Image className='rounded-lg mx-auto md:max-w-md xl:max-w-2xl border-4 ring-offset-gray-500 outline-offset-4'
              src={"/core2.jpg"}
              width="0"
              height="0"
              sizes='100vw'
              style={{width: "100%", height: "auto"}}
              alt="image of a boat full of shipping containers"
              data-aos="fade-right"
              data-aos-delay="300"
              />
              <div className="flex flex-col justify-center flex-1 p-6" data-aos="fade-right"
              data-aos-delay="300">
                <h3 className="text-4xl font-bold text-[#214733]">Mission</h3>
                <p className="text-2xl my-6 lg:mx-10 font-semibold text-[#214733]">To provide our customers with superior quality and cost-effective products
                    supported with personalized and proactive professional service. 
                </p>
              </div>
              </div>
              </div>
	          </div>
            <div className="xl:bg-[#002401]">
            <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md lg:flex-row">
            <Image 
              className='rounded-lg mx-auto md:max-w-md xl:max-w-2xl border-4 ring-offset-gray-500 outline-offset-4'
              src={"/core3.jpg"}
              width="0"
              height="0"
              sizes='100vw'
              style={{width: "100%", height: "auto"}}
              alt="image of a glass building"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-anchor-placement="bottom-bottom"
              />
              <div className="flex flex-col justify-center flex-1 p-6" data-aos="fade-left" 
              data-aos-delay="300" data-aos-anchor-placement="bottom-bottom">
                <h3 className="text-4xl font-bold text-[#004b01] xl:text-[#bddebd]">Values</h3>
                <p className="text-2xl my-6 lg:mx-20 text-[#004b01] xl:text-[#bddebd]">We believe in being transparent about our products and our ingredients, and we work closely with suppliers to ensure that the products we sell meet your expectations.</p>
              </div>
            </div>
            </div>
	            </div>
          </div>
    </section>
  )
}

export default About;