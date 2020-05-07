import React, { Fragment, useEffect, useState } from 'react'
import CategoriesService from '../../../services/categories'
import { Image, Columns, Section } from 'react-bulma-components'
import styled from 'styled-components'

const DivSpaced = styled.div`
  margin-top: 50px;
`

const Categories = (props) => {
  const [categories, setCategories] = useState([])

  async function fetchCategories() {
    const response = await CategoriesService.index()
    setCategories(response.data['categories'])
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const categoriesList = categories.map((category, key) =>
    <Columns.Column desktop={{size: 3}} mobile={{size: 6}} key={key}>
      <Image src={category.img_url} onClick={() => props.fetchCategorySearch(category.id)}></Image>
    </Columns.Column>
  )

  return (
    <Fragment>
      <DivSpaced>
        <Columns className='is-mobile'>
          {categoriesList}
        </Columns>
      </DivSpaced>
    </Fragment>
  )
}

export default Categories;