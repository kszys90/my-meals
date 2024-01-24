import { Box } from '@mui/material'
import React from 'react'
import { Navigation, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import CarouselItem from './CarouselItem'

export const Carousel = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
          width: '95%'
        }}
      >
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          grabCursor={true}
          breakpoints={{
            0: {
              spaceBetween: 10,
              slidesPerView: 1
            },
            400: {
              spaceBetween: 20,
              slidesPerView: 2
            },
            600: {
              spaceBetween: 20,
              slidesPerView: 3
            },
            900: {
              spaceBetween: 20,
              slidesPerView: 4
            },
            1200: {
              spaceBetween: 20,
              slidesPerView: 5
            },
            1500: {
              spaceBetween: 20,
              slidesPerView: 6
            },
            2000: {
              spaceBetween: 20,
              slidesPerView: 7
            }
          }
          }

          navigation
          scrollbar={{ draggable: true }}
        >
          {itemData.map((item) => (
            <SwiperSlide
              key={item.img}
            >
              <CarouselItem
                item={item}
                key={item.img}
              />
            </SwiperSlide>
          ))
          }
        </Swiper>

      </Box >
    </>
  )
}

export default Carousel

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
    author: 'swabdesign'
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
    author: 'Pavel Nekoranec'
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
    author: 'Charles Deluvio'
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
    author: 'Christian Mackie'
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
    author: 'Darren Richardson'
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
    author: 'Taylor Simpson'
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
    author: 'Ben Kolde'
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
    author: 'Philipp Berndt'
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
    author: 'Jen P.'
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
    author: 'Douglas Sheppard'
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
    author: 'Fi Bell'
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
    author: 'Hutomo Abrianto'
  }
]
