import { TProduct } from '@customTypes/products'
import { createSlice } from '@reduxjs/toolkit'

interface ICartState {
  items: { [key: number]: number }
  productFullInfo: TProduct[]
}
const initialState: ICartState = {
  items: {},
  productFullInfo: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const id = action.payload
      if (state.items[id]) {
        state.items[id]++
      } else {
        state.items[id] = 1
      }
    },
    removeFromCart(state, action) {
      const id = action.payload
      if (state.items[id] === 1) {
        delete state.items[id]
      } else {
        state.items[id]--
      }
    },
    setProductFullInfo(state, action) {
      state.productFullInfo = action.payload
    }
  }
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
