import React, { Fragment, useState, useEffect } from 'react'
import SearchBar from './search_bar'
import Categories from '../common/categories'
import { Columns } from 'react-bulma-components'
import SearchService from '../../services/search'
import CategoriesService from '../../services/categories'

const Search = (props) => {
  const [albums, setAlbums] = useState([])
  const [artists, setArtists] = useState([])
  const [songs, setSongs] = useState([])

  async function fetchCategorySearch(id) {
    const response = await CategoriesService.show(id)

    setAlbums(response.data['albums'])
    setAlbums(response.data['artists'])
    setAlbums(response.data['songs'])
  }

  async function fetchSearch(query) {
    const response = await SearchService.index(query)

    setAlbums(response.data['albums'])
    setAlbums(response.data['artists'])
    setAlbums(response.data['songs'])
  }

  return (
    <Fragment>
      <Columns>
        <Columns.Column desktop={{size: 6, offset: 3}} mobile={{size: 12}}>
          <SearchBar fetchSearch={fetchSearch} />
        </Columns.Column>
      </Columns>
      <Categories fetchCategorySearch={fetchCategorySearch}/>
    </Fragment>
  )
}

export default Search;