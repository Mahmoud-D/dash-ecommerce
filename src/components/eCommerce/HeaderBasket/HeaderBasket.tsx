import { useAppSelector } from '@store/hooks'
import Logo from '../../../assets/svg/cart.svg?react'
import { getCartTotalQuantitySelector } from '../../../store/selectors/index'

import styles from './styles.module.css'
const { basketContainer, basketQuantity } = styles

const HeaderBasket = () => {
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector)
  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  )
}

export default HeaderBasket
