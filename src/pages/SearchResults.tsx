import React from 'react'

export const SearchResults = (props: any) => {
  const { searchPhrase } = props
  return (
    <div >
      search phrase is: {searchPhrase}
    </div>
  )
}

export default SearchResults
