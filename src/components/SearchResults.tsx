import React from 'react'
import { useParams } from 'react-router-dom'

export const SearchResults = (props: any) => {
  const { searchPhrase } = useParams()
  return (
    <div >
      search phrase is: {searchPhrase}
    </div>
  )
}

export default SearchResults
