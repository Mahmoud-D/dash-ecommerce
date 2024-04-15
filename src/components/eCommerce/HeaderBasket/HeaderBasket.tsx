import { useEffect, useState } from 'react'
import { useAppSelector } from '@store/hooks'

import { getCartTotalQuantitySelector } from '../../../store/selectors/index'

import Logo from '../../../assets/svg/cart.svg?react'
import styles from './styles.module.css'

const { basketContainer, basketQuantity, pumpCartQuantity } = styles

const HeaderBasket = () => {
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector)
  const [isAnimate, setIsAnimate] = useState(false)

  const totalQuantityStyle = ` ${basketQuantity} ${isAnimate ? pumpCartQuantity : ''}`

  useEffect(() => {
    if (!totalQuantity) {
      return
    }
    setIsAnimate(true)
    const debounce = setTimeout(() => {
      setIsAnimate(false)
    }, 300)

    return () => {
      clearTimeout(debounce)
    }
  }, [totalQuantity])

  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={totalQuantityStyle}>{totalQuantity}</div>
    </div>
  )
}

export default HeaderBasket
