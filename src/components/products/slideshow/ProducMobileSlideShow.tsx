'use client'
import React, { useState } from 'react'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperObject } from 'swiper'
import { Autoplay, FreeMode, Pagination  } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshow.css'

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProducMobileSlideShow = ({ images, title, className }: Props) => {

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (
    <div className={className}>
      <Swiper
        style={{
          width:'100vw',
          height:'500px'
        }}
        navigation={true}
        pagination
        autoplay={{
          delay:2500
        }}
        
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper2"
      >
        {
          images.map(image => (
            <SwiperSlide
              key={image}
            >
              <Image
                alt={title}
                width={600}
                height={500}
                src={`/products/${image}`}
                className='object-fill'
              />
            </SwiperSlide>
          ))
        }
      </Swiper>

    
    </div>
  )
}
