'use client'
/* eslint-disable prettier/prettier */
import { useState } from "react";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { TbPhotoFilled } from "react-icons/tb";
import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  Autoplay,
  Navigation,
  EffectCoverflow,
  Pagination
} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

import './style.scss'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'


interface SlideItem {
  id: number;
  src: string;
  alt: string;
  tipo: "foto" | "video";
}

const Slide: React.FC = () => {
  const [filtro, setFiltro] = useState<string>('foto')

  const item: SlideItem[] = [
    {
      id: 2,
      src: '/img/galeria/CTR_03.webp',
      alt: 'banner',
      tipo: 'foto'
    },
    {
      id: 3,
      src: '/img/galeria/CTR_04.webp',
      alt: 'banner',
      tipo: 'foto'
    },
    {
      id: 4,
      src: '/img/galeria/CTR_05.webp',
      alt: 'banner',
      tipo: 'foto'
    }, 
    {
      id: 5,
      src: '/img/galeria/CTR_05.webp',
      alt: 'banner',
      tipo: 'foto'
    }, 
    {
      id: 10,
      src: '/img/galeria/CTR_10.webp',
      alt: 'banner',
      tipo: 'foto'
    },
    {
      id: 11,
      src: '/img/galeria/CTR_11.webp',
      alt: 'banner',
      tipo: 'foto'
    }, 
    {
      id: 12,
      src: '/img/galeria/CTR_12.webp',
      alt: 'banner',
      tipo: 'foto'
    },  {
      id:13,
      src: 'https://www.youtube.com/embed/_tBJTvbyihQ',
      alt: 'banner',
      tipo: 'video'
    },

  ]
  return (
    <>
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
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        navigation={true}
        slidesPerView={'auto'}
        breakpoints={{
          560: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          
        }}
        pagination={false}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="slide"
      >
        {item
        .filter((item) => item.tipo === filtro)
        .map((item) => (
          <SwiperSlide key={item.id}>
            {item.tipo === "foto" ? (
              <LazyLoadImage effect="blur" src={item.src} alt={item.alt} />
            ) : (
              <iframe width="424" height="238" src={item.src} 
              title="#sempontofinal" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            )}

          </SwiperSlide>
        ))}
      </Swiper>
      <div className="menu-botao">
        <button aria-label='foto' onClick={() => setFiltro('foto')}>
          <TbPhotoFilled />
        </button>
        <button aria-label='play'onClick={() => setFiltro('video')}>
          <BsFillPlayBtnFill />
        </button>
      </div>
    </>

  )
}

export default Slide
