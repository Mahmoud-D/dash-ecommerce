import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import actGetCategories from '@store/categories/actGetCategories'

import Category from '../components/eCommerce/category/Category'
import GridList from '@components/common/GridList/GridList'

import Loading from '@components/fedback/Loading/Loading'

const Categories = () => {
  const dispatch = useAppDispatch()
  const { loading, error, categories } = useAppSelector(
    (state) => state.categories
  )

  useEffect(() => {
    if (!categories.length) {
      dispatch(actGetCategories())
    }
  }, [dispatch, categories])

  return (
    <Loading status={loading} error={error}>
      <GridList
        records={categories}
        renderItem={(record) => <Category {...record} />}
      />
    </Loading>
  )
}

export default Categories
