import { createSlice } from '@reduxjs/toolkit'
import actGetCategories from './actGetCategories'

import { TCategory } from '@customTypes/category'
import { TLoading } from '@customTypes/shared'

type TinitialState = {
  categories: TCategory[]
  loading: TLoading
  error: string | null
}

const initialState: TinitialState = {
  categories: [],
  loading: 'idle',
  error: null
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = 'pending'
      state.error = null
    })
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = 'succeeded'
      state.categories = action.payload
    })
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = 'failed'
      state.error = action.payload as string
    })
  }
})

export default categoriesSlice.reducer
