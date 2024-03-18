import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import {
  actGetProductsByCatPrefix,
  productsCleanUp
} from '@store/products/productsSlice'

import Product from '@components/eCommerce/product/Product'
import { Loading } from '@components/fedback'

import { Container, Row, Col } from 'react-bootstrap'

const Products = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const { loading, error, records } = useAppSelector((state) => state.products)

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string))

    return () => {
      dispatch(productsCleanUp())
    }
  }, [dispatch, params])

  const productsList =
    records.length > 0
      ? records.map((record) => (
          <Col
            xs={3}
            key={record.id}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Product {...record} />
          </Col>
        ))
      : 'there are no categories'

  return (
    <Container>
      <Loading status={loading} error={error}>
        <Row>{productsList}</Row>
      </Loading>
    </Container>
  )
}

export default Products
