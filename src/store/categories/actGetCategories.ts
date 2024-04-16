import { TCategory } from '@customTypes/category'
import { createAsyncThunk } from '@reduxjs/toolkit'

import Axios from 'axios'

type TResponse = TCategory[]

const actGetCategories = createAsyncThunk(
  'categories/actGetCategories',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const response = await Axios.get<TResponse>('/categories')
      return response.data
    } catch (error) {
      if (Axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message)
      } else {
        return rejectWithValue('An unexpected error occurred')
      }
    }
  }
)
export default actGetCategories
