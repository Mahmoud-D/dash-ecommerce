import { createSlice } from '@reduxjs/toolkit'

type TinitialState = {
  categories: { id: number; title: string; prefix: string; image: string }[]
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
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
  reducers: {}
})

export default categoriesSlice.reducer
