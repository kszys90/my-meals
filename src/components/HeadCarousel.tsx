import { Box } from '@mui/material'
import React from 'react'
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import HeadCarouselItem from './HeadCarouselItem'

export const HeadCarousel = () => {
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
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          modules={[Autoplay, Navigation, Scrollbar]}
          grabCursor={true}
          loop={true}
          navigation
          scrollbar={{ draggable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 1
            },
            550: {
              slidesPerView: 2,
              spaceBetween: 1
            },
            650: {
              slidesPerView: 3,
              spaceBetween: 1
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 1
            },
            1500: {
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
                <HeadCarouselItem
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

export default HeadCarousel

const itemData = [
  {
    img: 'https://www.themealdb.com/images/media/meals/1525873040.jpg',
    title: 'Seafood'
  },
  {
    img: 'https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg',
    title: 'Pork'
  },
  {
    img: 'https://www.themealdb.com/images/media/meals/oe8rg51699014028.jpg',
    title: 'Dessert'
  },
  {
    img: 'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg',
    title: 'Chicken'
  },
  {
    img: 'https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg',
    title: 'Breakfast'
  },
  {
    img: 'https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg',
    title: 'Lamb'
  },
  {
    img: 'https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg',
    title: 'Pasta'
  },
  {
    img: 'https://www.themealdb.com/images/media/meals/ctg8jd1585563097.jpg',
    title: 'Beef'
  }
]
