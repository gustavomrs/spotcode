import React, { Fragment, useState, useEffect } from 'react'
import FavoritesService from '../../services/favorites'
import ResultTabs from '../common/result_tabs'

const Favorites = (props) => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetchFavorites();
  }, []);

  async function fetchFavorites() {
    const response = await FavoritesService.index()
    setFavorites(response.data)
  }

  return (
    <Fragment>
      <ResultTabs albums={favorites.albums || []} artists={favorites.artists || []} songs={favorites.songs || []}/>
    </Fragment>
  )
}

export default Favorites;
