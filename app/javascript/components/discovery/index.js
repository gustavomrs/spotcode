import React, { Fragment } from 'react'
import Album from '../album'
import styled from 'styled-components'
import { Columns, Heading } from 'react-bulma-components'

const DivSpaced = styled.div`
  margin-top: 50px;
`

const Discovery = () => {
  const albumsMock = [
    { id: 1, artist_name: 'Andrew Howes', title: 'Gubernator', cover_url: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2f248b465e87a8800d0362b55a3b16f9d7173888/gubernator.jpg' },
    { id: 2, artist_name: 'Andrew Howes', title: 'The Great Bear', cover_url: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ffbb0eea38171a0cd8c85f977e3bf2e4f9996775/the_great_bear.jpg' },
    { id: 3, artist_name: 'Yellow Chair', title: 'Barcelona', cover_url: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b56f4c80ed66afda06173d0530bbf8c720ad7ae0/barcelona.jpg' },
    { id: 4, artist_name: 'Andrew Howes', title: 'Gubernator', cover_url: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2f248b465e87a8800d0362b55a3b16f9d7173888/gubernator.jpg' },
  ]

  const albums = albumsMock.map((album, key) =>
    <Columns.Column desktop={{ size: 3}} mobile={{ size: 6  }} key={key}>
      <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} id={album.id}>
      </Album>
    </Columns.Column>
  )

  console.log(albums)

  return (
    <Fragment>
      <div>
        <Heading className='has-text-white' size={4}>
          Recently played
        </Heading>

        <Columns className='is-mobile'>
          {albums}
        </Columns>

      </div>

      <DivSpaced>
        <Heading className='has-text-white' size={4}>
          Recomended
        </Heading>

        <Columns className='is-mobile'>
          {albums}
        </Columns>
      </DivSpaced>
    </Fragment>
  )
}

export default Discovery;