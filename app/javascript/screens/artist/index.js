import React, { Fragment } from 'react'
import SectionWrapper from '../../components/common/section_wrapper'
import NavbarFooter from '../../components/common/navbar_footer'
import ArtistMusics from '../../components/artist_musics'

const Artist = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <ArtistMusics />
      </SectionWrapper>
      <NavbarFooter />
    </Fragment>
  )
}

export default Artist;