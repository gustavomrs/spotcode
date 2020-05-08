import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Image, Heading } from 'react-bulma-components'
import { Link } from 'react-router-dom'

const DivSpaced = styled.div`
  margin-top: 10px;
`

const Artist = (props) => {
  return (
    <Link to={`/artists/${props.id}`}>
      <Fragment>
        <Image src={props.file_url}></Image>
        <DivSpaced>
          <Heading size={6} className='has-text-white has-text-centered' >{props.artist_name}</Heading>
        </DivSpaced>
      </Fragment>
    </Link>
  )
}

export default Artist;