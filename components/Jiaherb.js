import React, { useEffect }from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Jiaherb = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="jiaherb" data-aos="fade-up"
    data-aos-delay="300" data-aos-anchor-placement="center-bottom">
     <section className="pb-20 relative block">
        <div className="container mx-auto lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-8/12 px-4">
              <h2 className="text-5xl font-bold text-[#214733]">Official Distributor of Jiaherb</h2>
              <p className="text-3xl my-6 lg:mx-20 font-semibold text-[#214733]">
              a world leading company in manufacturing and exporting of
              botanical extracts and derivatives
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Jiaherb;