import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@store/hooks'
import actGetCategories from '@store/categories/actGetCategories'

import Category from '../components/eCommerce/category/Category'

import { Container, Row, Col } from 'react-bootstrap'

const Categories = () => {
  const dispatch = useAppDispatch()

  const { loading, error, categories } = useAppSelector(
    (state) => state.categories
  )

  useEffect(() => {
    dispatch(actGetCategories())
  }, [dispatch])

  const categoriesList =
    categories.length > 0
      ? categories.map((cat) => (
          <Col
            xs={6}
            md={3}
            key={cat.id}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Category {...cat} />
          </Col>
        ))
      : 'There are no categories available.'

  return (
    <Container>
      <Row>{categoriesList}</Row>
    </Container>
  )
}

export default Categories
