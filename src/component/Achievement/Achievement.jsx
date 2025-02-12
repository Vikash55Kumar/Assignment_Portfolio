import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import achievement1 from "../../assets/achievement1.jpg"
import achievement2 from "../../assets/achievement2.jpg"
import achievement3 from "../../assets/achievement3.jpg"
import achievement4 from "../../assets/achievement4.jpg"
import achievement5 from "../../assets/achievement5.jpg"
import achievement6 from "../../assets/achievement6.jpg"
export default function Achievement() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const achievement = [ achievement1, achievement2, achievement3, achievement4, achievement5, achievement6] 
  
  return (
    <div className="relative flex flex-col items-center h-full w-full p-4">
      <span className="text-4xl font-bold text-center mb-6">Achievements</span>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-full py-12"
      >
        {achievement.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center w-[300px] h-[300px] bg-cover">
            <img src={item} alt='achievement' className="w-full h-full object-cover rounded-lg shadow-md" />
          </SwiperSlide>
        ))}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center">
          <svg ref={progressCircle} className="hidden" />
          <span ref={progressContent} className="hidden"></span>
        </div>
      </Swiper>
    </div>
  );
}
