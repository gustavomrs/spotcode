import React, { Fragment, useEffect, useState } from 'react'
import CategoriesService from '../../../services/categories'
import { Image, Columns, Section } from 'react-bulma-components'

const Categories = (props) => {
  const [categories, setCategories] = useState([])

  async function fetchCategories() {
    const response = CategoriesService.index()
    setCategories(response.data['categories'])
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <Fragment>
      <div>Categories</div>
    </Fragment>
  )
}

export default Categories;