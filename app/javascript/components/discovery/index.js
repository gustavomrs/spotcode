import React, { Fragment, useState, useEffect } from 'react'
import Album from '../common/album'
import styled from 'styled-components'
import { Columns, Heading } from 'react-bulma-components'
import AlbumsService from '../../services/albums'

const DivSpaced = styled.div`
  margin-top: 50px;
`

const Discovery = () => {
  const [recentAlbums, setRecentAlbums] = useState([]);
  const [recommendedAlbums, setRecommendedAlbmus] = useState([]);

  async function fetchAlbums() {
    const response = await AlbumsService.index()
    setRecentAlbums(response.data.recent_albums)
    setRecommendedAlbmus(response.data.recommended_albums)
  }

  useEffect(() => {
    fetchAlbums();
  }, [])

  const recentAlbumsComponents = recentAlbums.map((album, key) =>
    <Columns.Column desktop={{ size: 3}} mobile={{ size: 6 }} key={key}>
      <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} id={album.id}>
      </Album>
    </Columns.Column>
  )

  const recommendedAlbumsComponents = recommendedAlbums.map((album, key) =>
    <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
      <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} id={album.id}>
      </Album>
    </Columns.Column>
  )

  return (
    <Fragment>
      { recentAlbumsComponents.length > 0 &&
        <div>
          <Heading className='has-text-white' size={4}>
            <b>Recently played</b>
          </Heading>

          <Columns className='is-mobile'>
            {recentAlbumsComponents}
          </Columns>
        </div>
      }

      { recommendedAlbumsComponents.length > 0 &&
        <DivSpaced>
          <Heading className='has-text-white' size={4}>
            Recommended
          </Heading>

          <Columns className='is-mobile'>
            {recommendedAlbumsComponents}
          </Columns>
        </DivSpaced>
      }
    </Fragment>
  )
}

export default Discovery;