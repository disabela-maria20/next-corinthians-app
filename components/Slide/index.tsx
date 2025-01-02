/* eslint-disable prettier/prettier */
import {
  Autoplay,
  Navigation,
  EffectCoverflow,
  Pagination
} from 'swiper/modules'

import './style.scss'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

const Slide: React.FC = () => {
  const item = [
    {
      id: 0,
      src: '/img/foto.png',
      alt: 'banner'
    },
    {
      id: 1,
      src: '/img/foto.png',
      alt: 'banner'
    },
    {
      id: 2,
      src: '/img/foto.png',
      alt: 'banner'
    },
    {
      id: 3,
      src: '/img/foto.png',
      alt: 'banner'
    },
    {
      id: 4,
      src: '/img/foto.png',
      alt: 'banner'
    }
  ]
  return (
    <Swiper
      style={{
        // eslint-disable-next-line prettier/prettier
        '--swiper-navigation-color': '#fff',
        // eslint-disable-next-line prettier/prettier
        '--swiper-pagination-color': '#fff'
      } as React.CSSProperties}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      navigation={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }}
      breakpoints={{
        560: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1450: {
          slidesPerView: 5,
          spaceBetween: 50
        }
      }}
      pagination={false}
      modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
      className="slide"
    >
      {item.map((item) => (
        <SwiperSlide key={item.id}>
          <img src={item.src} alt={item.alt} />
          <div>
            <button>abrir</button>
            <button>video</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slide
