import React, { Fragment, useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import FavoritesService from '../../../services/favorites'

const Favorite = (props) => {
  const [favored, setFavored] = useState(props.favored)

  let favoredButton;

  if(favored){
    favoredButton = <FaHeart size='25px' className='has-text-white' onClick={() => disfavor()}/>
  } else {
    favoredButton = <FaRegHeart size='25px' className='has-text-white' onClick={() => favor()}/>
  }

  async function favor() {
    await FavoritesService.create(props.kind, props.id)
    setFavored(true)
  }

  async function disfavor() {
    await FavoritesService.delete(props.kind, props.id)
    setFavored(false)
  }

  return (
    <Fragment>
      { favoredButton }
    </Fragment>
  )
}

export default Favorite;
