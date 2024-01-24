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
    img: 'https://placehold.co/600x400',
    title: 'Bed',
    author: 'swabdesign'
  },
  {
    img: 'https://placehold.co/600x401',
    title: 'Books',
    author: 'Pavel Nekoranec'
  },
  {
    img: 'https://placehold.co/600x402',
    title: 'Sink',
    author: 'Charles Deluvio'
  },
  {
    img: 'https://placehold.co/600x403',
    title: 'Kitchen',
    author: 'Christian Mackie'
  },
  {
    img: 'https://placehold.co/600x404',
    title: 'Blinds',
    author: 'Darren Richardson'
  },
  {
    img: 'https://placehold.co/600x405',
    title: 'Chairs',
    author: 'Taylor Simpson'
  },
  {
    img: 'https://placehold.co/600x406',
    title: 'Laptop',
    author: 'Ben Kolde'
  },
  {
    img: 'https://placehold.co/600x407',
    title: 'Doors',
    author: 'Philipp Berndt'
  },
  {
    img: 'https://placehold.co/600x408',
    title: 'Coffee',
    author: 'Jen P.'
  },
  {
    img: 'https://placehold.co/600x409',
    title: 'Storage',
    author: 'Douglas Sheppard'
  },
  {
    img: 'https://placehold.co/600x410',
    title: 'Candle',
    author: 'Fi Bell'
  },
  {
    img: 'https://placehold.co/600x411',
    title: 'Coffee table',
    author: 'Hutomo Abrianto'
  }
]
