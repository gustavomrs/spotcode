import React, { Fragment } from 'react'
import SectionWrapper from '../../components/common/section_wrapper'
import { Columns, Heading } from 'react-bulma-components'
import styled from 'styled-components'

const MainHeading = styled(Heading)`
  margin-top: 50px;
`


const HomeScreen = () => {
  return (
    <SectionWrapper>
      <Columns>
        <Columns.Column>
          <MainHeading className='has-text-weight-light has-text-centered has-text-white' size={1}>
            YOUR APP OF <br/> <span className='has-text-success'>MUSIC</span>
          </MainHeading>
        </Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column>
        </Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column>
        </Columns.Column>
      </Columns>
    </SectionWrapper>
  )
}

export default HomeScreen;