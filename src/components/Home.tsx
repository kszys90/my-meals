import React from 'react'

export const Home = (props: any) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <div
      {...otherProps}
    >
      12345
    </div>
  )
}

export default Home
