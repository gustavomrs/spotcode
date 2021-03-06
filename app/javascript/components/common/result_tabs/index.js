import React, { Fragment, useState, useEffect } from 'react'
import { Columns, Tabs } from 'react-bulma-components'
import styled, { css } from 'styled-components'
import Album from '../../common/album'
import Artist from '../../common/artist'
import Musics from '../../musics'


const CustomTab = styled(Tabs.Tab)`
 a{
   color: white;
   ${({ active }) => active && css`
     color: hsl(171, 100%, 41%) !important;
     border-color: hsl(171, 100%, 41%) !important;
   `}
 }
`

const ResultTabs = (props) => {
  const [activeTab, setActiveTab] = useState(['albums'])
  const [albums, setAlbums] = useState([])
  const [artists, setArtists] = useState([])

  useEffect(() => {
    setAlbums(props.albums.map((album, key) =>
      <Columns.Column desktop={{size: 3}} mobile={{size: 6}} key={key}>
        <Album id={album.id} artist_name={album.artist_name} title={album.title} cover_url={album.cover_url}/>
      </Columns.Column>
    ))
  }, [props.albums])

  useEffect(() => {
    setArtists(props.artists.map((artist, key) =>
      <Columns.Column desktop={{size: 3}} mobile={{size: 6}} key={key}>
        <Artist id={artist.id} artist_name={artist.name} file_url={artist.file_url}/>
      </Columns.Column>
    ))
  }, [props.artists])

  return (
    <Fragment>
    <Tabs
      style={{display: props.albums.length || props.artists.length || props.songs.length ? "" : "none"}}
      align='centered' size='medium'
    >
      <CustomTab active={activeTab == 'albums' ? true : false} onClick={() => setActiveTab('albums')}>
         Albums
      </CustomTab>
        <CustomTab active={activeTab == 'artists' ? true : false} onClick={() => setActiveTab('artists')}>
         Artists
      </CustomTab>
        <CustomTab active={activeTab == 'songs' ? true : false} onClick={() => setActiveTab('songs')}>
         Musics
      </CustomTab>
    </Tabs>
​
    <div>
      <div style={{display: activeTab != 'albums' ? "none" : ""}}>
        <Columns className="columns is-mobile is-multiline">
          {albums}
        </Columns>
      </div>
​
      <div style={{display: activeTab != 'artists' ? "none" : ""}}>
        <div className="columns is-mobile is-multiline">
         {artists}
        </div>
      </div>
​
      <div style={{display: activeTab != 'songs' ? "none" : ""}}>
        <div className="columns is-multiline">
          <div className="column is-12">
            <Musics songs={props.songs || []} />
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default ResultTabs;
