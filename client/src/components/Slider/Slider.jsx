// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
console.log(Swiper);
export default function App() {
  const imageFilenames = ['banner1.jpeg', 'banner2.jpeg', 'banner3.jpg','Jewelry_Celebrations .jpeg'];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {imageFilenames.map((filename, index) => (
          <SwiperSlide key={index}>
            <img src={`/img/${filename}`} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
