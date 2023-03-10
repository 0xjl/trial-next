// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import Image from 'next/image';

const Hero = ({hero}) => {
  return (
    <Swiper 
      style={{
        "--swiper-pagination-color": "white",
        "--swiper-pagination-bullet-inactive-color": "white",
      }}
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, EffectFade, Navigation, Pagination]}
      className="mySwiper"
      id="my-swiper">
      <SwiperSlide>
        <Image
          width="0"
          height="0"
          sizes="100vh"
          style={{ width: '100%', height: '100vh' }}
          src={'/slide-1.jpg'}
          alt='Image of two people sitting under a tree watching the sun set' 
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]">
          <div className="text-white fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
            <h2 className="text-xl md:text-5xl">{hero.data[0].attributes.header}</h2>
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
          alt='Image of a large family jumping together at the beach while the sun sets behind them' 
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]">
          <div className="text-white fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
            <h2 className="text-xl md:text-5xl">{hero.data[1].attributes.header}</h2>
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
          alt='Picture of Black Berries'
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]">
          <div className="text-white fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
            <h2 className="text-xl md:text-5xl">{hero.data[2].attributes.header}</h2>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Hero;