import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = ({component}) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id='about-us'>
      <div className="text-center">
        <div className='sm:pt-8 xl:pt-0 p-2'>
      
        </div>
        <div className='pt-[2%] text-[#214733] mx-10' data-aos="fade-up"
                data-aos-delay="300"
                data-aos-anchor-placement="bottom-bottom">
              <h1 className='m-4 text-5xl font-bold pt-5'>{component.data[0].attributes.header}</h1>
              <h2 className='mt-10 text-2xl font-semibold'>{component.data[0].attributes.description}</h2>
              <h2 className='m-4 text-2xl font-semibold'>Primary line of business is Importer-Distributor of NUTRITION & HEALTH,
                ingredients such as Botanical Extracts & Powders.</h2>
        </div>
        <div>
          <div className="container mx-auto space-y-12 pt-[4em]"> {/* pt-[10%] */}
            <div className="flex flex-col overflow-hidden rounded-md lg:flex-row">
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
                data-aos-anchor-placement="bottom-bottom"
              />
              <div className="flex flex-col justify-center flex-1 p-6" data-aos="fade-left" data-aos-delay="300" data-aos-anchor-placement="bottom-bottom">
                <h3 className="text-4xl font-bold text-[#214733]">{component.data[1].attributes.header}</h3>
                <p className="md:text-xl lg:text-2xl my-6 lg:mx-20 font-semibold text-[#214733]">{component.data[1].attributes.uniqueinput} <br /> <span className='font-bold'>{component.data[1].attributes.description}</span> {component.data[1].attributes.uniqueinput2}
                </p>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
        <div>
          <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md lg:flex-row-reverse">
              <Image className='rounded-lg mx-auto md:max-w-md xl:max-w-2xl border-4 ring-offset-gray-500 outline-offset-4'
                src={"/core2.jpg"}
                width="0"
                height="0"
                sizes='100vw'
                style={{ width: "100%", height: "auto" }}
                alt="image of a boat full of shipping containers"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-anchor-placement="bottom-bottom"
              />
              <div className="flex flex-col justify-center flex-1 p-6" data-aos="fade-right"
                data-aos-delay="300" data-aos-anchor-placement="bottom-bottom">
                <h3 className="text-4xl font-bold text-[#214733]">{component.data[2].attributes.header}</h3>
                <p className="md:text-xl lg:text-2xl my-6 lg:mx-20 font-semibold text-[#214733]">{component.data[2].attributes.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div> 
          <div className="container mx-auto space-y-12 pt-[3em]">
            <div className="flex flex-col overflow-hidden rounded-md lg:flex-row">
              <Image
                className='rounded-lg mx-auto md:max-w-md xl:max-w-2xl border-4 ring-offset-gray-500 outline-offset-4'
                src={"/core3.jpg"}
                width="0"
                height="0"
                sizes='100vw'
                style={{ width: "100%", height: "auto" }}
                alt="image of a glass building"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-anchor-placement="bottom-bottom"
              />
              <div className="flex flex-col justify-center flex-1 p-6" data-aos="fade-left"
                data-aos-delay="300" data-aos-anchor-placement="bottom-bottom">
                <h3 className="text-4xl font-bold text-[#214733]">{component.data[3].attributes.header}</h3>
                <p className="md:text-xl lg:text-2xl my-6 lg:mx-20 font-semibold text-[#214733]">{component.data[3].attributes.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About;