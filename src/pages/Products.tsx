import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { useParams } from 'react-router-dom'
import {
  actGetProductsByCatPrefix,
  productsCleanUp
} from '@store/products/productsSlice'

import Product from '@components/eCommerce/product/Product'
import { Loading } from '@components/fedback'
import GridList from '@components/common/GridList/GridList'
import { TProduct } from '@customTypes/products'

import { Container } from 'react-bootstrap'

const Products = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const { loading, error, records } = useAppSelector((state) => state.products)

  const cartItems = useAppSelector((state) => state.cart.items)

  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: el.id !== undefined ? cartItems[el.id] || 0 : 0
  }))

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string))

    return () => {
      dispatch(productsCleanUp())
    }
  }, [dispatch, params])

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList<TProduct>
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  )
}

export default Products
