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
      <div className="container mx-auto pt-[2em] lg:pt-20">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-8/12 px-4 text-[#214733]">
            <h2 className="text-5xl font-[600]">Jiaherb</h2>
            <p className='md:text-xl lg:text-2xl my-2 lg:my-6 lg:mx-20 font-[300] text-[#214733]'>
              a world leading company in the manufacturing and exporting of botanical extracts and derivatives
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:space-y-12 pt-[1em] font-[300] break-words text-center md:text-left">
        <div className="flex flex-col justify-center overflow-hidden rounded-md lg:flex-row p-4 break-words">
          <div className=" mb-4 p-0 sm:p-4 md:w-[450px]">
            <div className="bg-[#002407] text-[#bddebd] group h-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
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
              <div className="py-4 px-6">
                <h1 className="mb-3 inline-block title-font text-xl font-medium tracking-wide">Production System</h1>
                <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed">
                Jiaherb is a cGMP, FSC22000, ISO22000, HACCP, Kosher and Halal certified company.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-4 p-0 sm:p-4 md:w-[450px]">
            <div className="bg-[#002401] text-[#bddebd] group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
              <div className='overflow-hidden'>
                <Image src={"/jiaherb3.png"}
                  width="0"
                  height="0"
                  sizes='100vw'
                  style={{ width: "100%", height: "auto" }}
                  alt="blog"
                  className="lg:h-48 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105" />
              </div>
              <div className="py-4 px-6">
                <h1 className="mb-3 inline-block title-font text-xl font-medium  tracking-wide">Quality System</h1>
                <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed">
                  Jiaherb has an ISO17025-certified lab equipped with advanced detection equipment. It can be used
                  for testing routine physical and chemical indicators, active ingredients (UPLC, HPLC, UV), solvent residues (GC), pesticide residues (GC-MS), benzopyrene (LC-MS), unknown compounds (LC-MS), heavy metals (ICP-MS), antioxidant value (ORAC), product characterization (HPTLC, IR),
                  irradiation residues (PSL), enzyme activity, protein, etc.</p>
              </div>
            </div>
          </div>
          <div className="mb-4 p-0 sm:p-4 md:w-[450px]">
            <div className="bg-[#002401] text-[#bddebd] group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
              <div className='overflow-hidden'>
                <Image src={"/jiaherb2.png"}
                  width="0"
                  height="0"
                  sizes='100vw'
                  style={{ width: "100%", height: "auto" }}
                  alt="blog" className="lg:h-48 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105" />
              </div>
              <div className="py-4 px-6">
                <h1 className="mb-3 inline-block title-font text-xl font-medium  tracking-wide">R&D Center
                </h1>
                <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed">
                Jiaherb has a GMP pilot production department equipped with various R&D facilities from small to pilot scale, such as
                extraction, concentration, freeze drying, spray drying, vacuum drying, homogenizer, high pressure column chromatography and so on.  
                Jiaherb has over 50+ patents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jiaherb;