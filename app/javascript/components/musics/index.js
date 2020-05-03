import React, { Fragment, useState, useEffect, useRef } from 'react'
import { Button, Columns } from 'react-bulma-components'
import Music from './music';
import styled from 'styled-components'

const PlaySequenceButton = styled(Button)`
  margin-bottom: 20px;
`

const Musics = (props) => {
  const [songs, setSongs] = useState([])
  const [playing, setPlaying] = useState([])
  const audioRef = useRef()
  const [playRandom, setPlayRandom] = useState(false)

  const nextSong = () => {
    if(playRandom) {
      let index = Math.floor(Math.random() * props.songs.length)
      setPlaying(props.songs[index])
    } else
      setPlaying([])
  }

  const switchRandom = () => {
    if(playRandom) {
      setPlayRandom(false)
      setPlaying([])
    } else
      setPlayRandom(true)
  }

  useEffect(() => {
    if (audioRef.current !== null) {
      audioRef.current.pause()
      audioRef.current.load()
      if(playing.id) {
        audioRef.current.play()
      }
    }
  }, [playing])

  useEffect(() => {
    setSongs(props.songs.map((song, key) =>
      <Music
        song={song}
        playing={playing.id == song.id}
        setPlaying={setPlaying}
        key={key}
      />
    ))
  }, [props.songs, playing]);

  useEffect(() => {
    if(playRandom)
      nextSong();
  }, [playRandom]);

  return (
    <Fragment>
      <Columns className='is-mobile is-centered'>
        <Columns.Column desktop={{size: 2}} mobile={{size: 12}} className='has-text-centered'>
          <PlaySequenceButton
            className='is-medium'
            color='primary'
            outlined
            onClick={() => switchRandom()}
          >
            {playRandom ? 'Stop playing' : 'Play randomly'}
          </PlaySequenceButton>
          <audio controls ref={audioRef} onEnded={() => nextSong()} className='is-hidden'>
            <source src={playing.file_url} />
          </audio>
        </Columns.Column>
      </Columns>
      {songs}
    </Fragment>
  )
}

export default Musics;