import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import {
  actGetProductsByCatPrefix,
  productsCleanUp
} from '@store/products/productsSlice'

import Product from '@components/eCommerce/product/Product'
import { Loading } from '@components/fedback'
import GridList from '@components/common/GridList/GridList'

import { Container } from 'react-bootstrap'

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

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  )
}

export default Products
