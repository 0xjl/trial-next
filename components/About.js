import { useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineCaretRight } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className='text-center font-light' id='about-us'>
      <div className='pt-[3%] text-[#214733] p-4' 
        data-aos="fade-up"    
        data-aos-delay="300"
        data-aos-anchor-placement="bottom-bottom">
        <h1 className='text-5xl font-[600]'>About Us</h1>
        <h2 className='text-lg md:text-2xl pt-10 max-w-7xl mx-auto'>Rising Tiger Enterprises Inc. is an SEC and FDA registered corporation that specializes in the importation & distribution of ingredients such as Botanical Extracts and Powders, Vitamins and Minerals, Protein and Amino Acids.</h2>
        <h2 className='text-lg md:text-2xl pt-10 max-w-7xl mx-auto'>We are appointed as an Official Distributor of Shaanxi Jiahe Phytochem Co., Ltd. (JIAHERB)</h2>
        <div className="flex flex-col lg:space-y-6 justify-center flex-1 mt-[5em] text-[#214733]" data-aos="fade-left"
              data-aos-delay="300" data-aos-anchor-placement="bottom-bottom">
              <h3 className="text-4xl font-medium text-[#214733] pr-8">Industries We Serve</h3> 
              <div className='md:text-xl lg:text-2xl flex justify-center'>
                <div className='flex'><span>Nutrition & Health</span></div>
                <div className='flex'><span>Food & Beverage</span></div>
              </div>
              <div className='md:text-xl lg:text-2xl flex justify-center space-x-5'>
              <div className='flex'><span>Pharmaceuticals</span></div>
              <div className='flex'><span>Personal Care</span></div>
              </div>
             </div>
      </div>
        <div className="container mx-auto lg:space-y-12 pt-[1em] lg:pt-[4em]">
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
              data-aos-anchor-placement="bottom-bottom"
            />
            </div>
            <div className="flex flex-col justify-center flex-1 p-6 mt-2" data-aos="fade-left" data-aos-delay="300" data-aos-anchor-placement="bottom-bottom">
              <h3 className="text-4xl font-medium text-[#214733]">Our Goal</h3>
              <p className="md:text-xl lg:text-2xl my-2 lg:my-6 lg:mx-20 text-[#214733]">To be the business partner of choice for 
              <br /> 
              <span className='font-[400] text-[#214733]'>Nutrition & Health</span> ingredients in the Philippines.
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
              data-aos-anchor-placement="bottom-bottom"
            />
            </div>
            <div className="flex flex-col justify-center flex-1 p-6 mt-2" data-aos="fade-right"
              data-aos-delay="300" data-aos-anchor-placement="bottom-bottom">
              <h3 className="text-4xl font-medium text-[#214733]">Our Purpose</h3>
              <p className="md:text-xl lg:text-2xl my-2 lg:my-6 lg:mx-20 text-[#214733]">To provide our customers with superior quality and cost-effective ingredients supported with personalized and proactive professional services.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto lg:space-y-12 pt-0 lg:pt-[4em]">
          <div className="flex flex-col overflow-hidden rounded-md lg:flex-row">
          <div className='p-2'>
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
            </div>
            <div className="flex flex-col lg:space-y-6 justify-center flex-1 mt-2 text-[#214733]" data-aos="fade-left"
              data-aos-delay="300" data-aos-anchor-placement="bottom-bottom">
              <h3 className="text-4xl font-medium text-[#214733] pr-8">Our Values</h3> 
              <div className='md:text-xl lg:text-2xl flex justify-center space-x-10'>
                <div className='flex'><AiOutlineCaretRight /><span>Honest</span></div>
                <div className='flex'><AiOutlineCaretRight /><span>Proactive</span></div>
                <div className='flex'><AiOutlineCaretRight /><span>Responsive</span></div>
              </div>
              <div className='md:text-xl lg:text-2xl flex justify-center space-x-5'>
              <div className='flex'><AiOutlineCaretRight /><span>Reliable</span></div>
              <div className='flex'><AiOutlineCaretRight /><span>Determined</span></div>
              </div>
             </div>
          </div>
        </div>

    </section>

  )
}

export default About;