import React from 'react'

export const HeroImg = (props: any) => {
  const { image } = props
  return (
    <>
      <img
        src={image.url}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </>
  )
}

export default HeroImg
