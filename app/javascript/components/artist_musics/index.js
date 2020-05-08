import React, { Fragment, useState, useEffect } from 'react'
import { Heading, Columns, Image } from 'react-bulma-components'
import styled from 'styled-components'
import ArtistService from '../../services/artists'
import { useParams } from 'react-router-dom'
import Musics from '../../components/musics'

const DivSpaced = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`

const ArtistMusics = () => {
  let { id } = useParams();
  const [artist, setArtist] = useState([])

  async function fetchArtist() {
    const response = await ArtistService.show(id);

    setArtist(response.data)
  }

  useEffect(() => {
    fetchArtist();
  }, [])

  return(
    <Fragment>
      <Columns className='is-vcentered is-mobile is-centered'>
        <Columns.Column desktop={{size: 3}} className='has-text-centered'>
          <Image src={artist.file_url}/>
          <DivSpaced>
            <Heading size={6} className='has-text-white'>{artist.name}</Heading>
          </DivSpaced>
        </Columns.Column>
      </Columns>
      <Musics songs={artist.songs || []} artistName={artist.name}></Musics>
    </Fragment>
  )
}

export default ArtistMusics