import React from 'react'

export const Search = (props: any) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <div
      {...otherProps}
    >
      {children}
    </div>
  )
}

export default Search
