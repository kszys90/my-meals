import { Box, Typography } from '@mui/material'
import React from 'react'
import { Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import SecondaryCarouselItem from './SecondaryCarouselItem'

export const SecondaryCarousel = () => {
  return (
    <Box
      sx={{
        minHeight: { xs: '22vh', xl: '14vh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '10px',
        paddingTop: '10px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px',
          height: '20%',
          paddingBottom: '10px',
          paddingTop: '10px'
        }}
      >
        <Typography
          variant={'h6'}
          sx={{
            paddingLeft: '25px'
          }}
        >
          Category name
        </Typography>
      </Box>
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
            550: {
              slidesPerView: 3,
              spaceBetween: 1
            },
            650: {
              slidesPerView: 4,
              spaceBetween: 1
            },
            1000: {
              slidesPerView: 5,
              spaceBetween: 1
            },
            1500: {
              slidesPerView: 6,
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
                <SecondaryCarouselItem
                  item={item}
                  key={item.img}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Box >
    </Box>
  )
}

export default SecondaryCarousel

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
