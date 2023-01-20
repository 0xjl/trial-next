// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay,EffectFade, Navigation, Pagination } from "swiper";
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {

return(
    <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay,EffectFade, Navigation, Pagination]}
          className="mySwiper">

        <SwiperSlide>
        <Image 
           width="0"
           height="0"
           sizes="100vh"
           style={{ width: '100%', height: '100vh' }}
           src={'/slide-1.jpg'}
        />

          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]">
            <div className="text-white ml-[0rem] mt-[30rem]">
                <h2 className="md:text-5xl">We import health extracts for the ones you love</h2>
                                <Link href="#about">
              
                </Link> 
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <Image 
           width="0"
           height="0"
           sizes="100vh"
           style={{ width: '100%', height: '100vh' }}
           src={'/slide-2.jpg'}
        />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]">
            <div className="text-white ml-[0rem] mt-[30rem]">
                <h2 className="md:text-5xl">We treat our clients like family</h2>
                              
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <Image 
           width="0"
           height="0"
           sizes="100vh"
           style={{ width: '100%', height: '100vh' }}
           src={'/slide-3.jpg'}
        />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]">
            <div className="text-white ml-[0rem] mt-[30rem]">
                <h2 className="md:text-5xl">40 years of experience in the food and beverage industry</h2>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <Image 
           width="0"
           height="0"
           sizes="100vh"
           style={{ width: '100%', height: '100vh' }}
           src={'/slide-4.jpg'}
        />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]">
            <div className="text-white ml-[0rem] mt-[30rem]">
                <h2 className="md:text-5xl">We want to give Seniors the life they deserve</h2>
                              
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <Image 
           width="0"
           height="0"
           sizes="100vh"
           style={{ width: '100%', height: '100vh' }}
           src={'/slide-2.jpg'}
        />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]">
            <div className="text-white ml-[0rem] mt-[30rem]">
                <h2 className="md:text-5xl">40 years of experience in the food and beverage industry</h2>
                              
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <Image 
           width="0"
           height="0"
           sizes="100vh"
           style={{ width: '100%', height: '100vh' }}
           src={'/slide-1.jpg'}
        />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]">
            <div className="text-white ml-[0rem] mt-[30rem]">
                <h2 className="md:text-5xl">We want to give Seniors the life they deserve</h2>
                              
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <Image 
           width="0"
           height="0"
           sizes="100vh"
           style={{ width: '100%', height: '100vh' }}
           src={'/slide-3.jpg'}
        />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]">
            <div className="text-white ml-[0rem] mt-[30rem]">
                <h2 className="md:text-5xl">We treat our clients like family</h2>
                              
            </div>
          </div>
          </SwiperSlide>
    </Swiper>
)
}

export default Hero;