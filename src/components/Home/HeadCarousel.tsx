import { Box, Zoom } from '@mui/material'
import React from 'react'
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import './swipper-custom.css'
import HeadCarouselItem from './HeadCarouselItem'
import { categories } from '../../utils/headCategories'
import { scrollToElement } from '../../utils/scrollToElement'

interface Props {
  refList: React.MutableRefObject<(HTMLDivElement | null)[]>
}

export const HeadCarousel: React.FC<Props> = ({ refList }) => {
  return (
    <Zoom
      in={true}
      style={{ transitionDelay: '500ms' }}
    >
      <Box
        sx={{
          height: { xs: '50vh', xl: '35vh' },
          paddingBottom: '20px',
          paddingTop: '10px',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1200px',
          backgroundColor: theme => theme.palette.background.paper,
          boxShadow: 8
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
          }}
        >
          {
            categories.sort(() => Math.random() - 0.5)
              .map((element, index) => (
                <SwiperSlide
                  key={element.img}
                >
                  <HeadCarouselItem
                    item={element}
                    key={element.img}
                    onButtonClick={refList && refList.current ? () => scrollToElement(refList.current[index]!) : null}
                  />
                </SwiperSlide>
              ))
          }
        </Swiper>
      </Box >
    </Zoom>
  )
}

export default HeadCarousel
