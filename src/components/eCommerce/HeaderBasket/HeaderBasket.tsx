import Logo from '../../../assets/svg/cart.svg?react'
import { useAppSelector } from '@store/hooks'
import styles from './styles.module.css'
const { basketContainer, basketQuantity } = styles

const HeaderBasket = () => {
  const cartItems = useAppSelector((state) => state.cart.items)
  console.log(cartItems)
  const totalQuantity = Object.values(cartItems).reduce(
    (acc, item) => acc + item,
    0
  )
  console.log(totalQuantity)
  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  )
}

export default HeaderBasket
