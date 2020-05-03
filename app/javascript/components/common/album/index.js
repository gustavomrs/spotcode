import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Image, Heading } from 'react-bulma-components'
import { Link } from 'react-router-dom'

const DivSpaced = styled.div`
  margin-top: 50px;
`

const Album = (props) => {
  return (
    <Link to={`/album/${props.id}`}>
      <Fragment>
        <Image src={props.cover_url}></Image>
        <DivSpaced>
          <Heading size={6} className='has-text-white' >{props.title}</Heading>
          <Heading size={6} className='has-text-white' subtitle>{props.artist_name}</Heading>
        </DivSpaced>
      </Fragment>
    </Link>
  )
}

export default Album;