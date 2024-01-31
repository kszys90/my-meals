import { Box } from '@mui/material'
import React from 'react'
import { Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import CarouselItem from './CarouselItem'
// import calcBreakpoints from './calcBreakpoints'

// eslint-disable-next-line no-unused-vars

export const Carousel = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
          width: '95%',
          maxWidth: '1200px'
        }}
      >
        <Swiper
          modules={[Navigation, Scrollbar]}
          grabCursor={true}
          loop={true}
          navigation
          scrollbar={{ draggable: true }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 1
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 1
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 1
            }
          }
          }
        >
          {
            itemData.map((item) => (
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
    img: 'https://www.themealdb.com/images/media/meals/zadvgb1699012544.jpg',
    title: 'Bed',
    author: 'swabdesign'
  },
  {
    img: 'https://www.themealdb.com/images/media/meals/oe8rg51699014028.jpg',
    title: 'Books',
    author: 'Pavel Nekoranec'
  },
  {
    img: 'https://www.themealdb.com/images/media/meals/60oc3k1699009846.jpg',
    title: 'Sink',
    author: 'Charles Deluvio'
  },
  {
    img: 'https://www.themealdb.com/images/media/meals/0206h11699013358.jpg',
    title: 'Kitchen',
    author: 'Christian Mackie'
  },
  {
    img: 'https://www.themealdb.com/images/media/meals/kos9av1699014767.jpg',
    title: 'Blinds',
    author: 'Darren Richardson'
  },
  {
    img: 'https://www.themealdb.com/images/media/meals/q8sp3j1593349686.jpg',
    title: 'Chairs',
    author: 'Taylor Simpson'
  },
  {
    img: 'https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg',
    title: 'Laptop',
    author: 'Ben Kolde'
  },
  {
    img: 'https://www.themealdb.com/images/media/meals/qtqwwu1511792650.jpg',
    title: 'Doors',
    author: 'Philipp Berndt'
  },
  {
    img: 'https://www.themealdb.com/images/media/meals/uwxqwy1483389553.jpg',
    title: 'Coffee',
    author: 'Jen P.'
  },
  {
    img: 'https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg',
    title: 'Storage',
    author: 'Douglas Sheppard'
  },
  {
    img: 'https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg',
    title: 'Candle',
    author: 'Fi Bell'
  }
]
