import React, { useState } from "react"
import { Link } from "gatsby"
import CartIcon from '../../images/icons/cart.svg'
import CloseIcon from '../../images/icons/close.svg'
import { useCart } from 'react-use-cart'

import { totalUnique, openBtn, sideCart, side, cart, openCart, closeBtn, cartItems, total, greySpan, toOrder } from './sideCart.module.scss'
import CartItem from "./sideCartItem"

const SideCart = () => {
	const { totalUniqueItems, items, cartTotal } = useCart()
	const [cartToggle, setCartToggle] = useState()

	return (
		<>
			<span className={openBtn} onClick={() => setCartToggle(!cartToggle)}><CartIcon /><span className={totalUnique}>{totalUniqueItems}</span></span>

			<div className={`${sideCart} ${cartToggle ? openCart : ''}`}>
				<div className={side} onClick={() => setCartToggle(!cartToggle)}></div>
				<div className={cart}>
					<h5>У кошику: <span>{totalUniqueItems}</span></h5>
					<span className={closeBtn} onClick={() => { setCartToggle(!cartToggle) }}><CloseIcon /></span>
					<div className={cartItems}>
						{
							items.map(item => {
								return (
									<CartItem key={item.id} product={item} />
								)
							})
						}
					</div>
					<div className={total}>
						<p>Ціна: <span>{cartTotal}₴</span> <span className={greySpan} >+ доставка</span></p>
						<Link className={toOrder} to="/order">Перейти до замовлення</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default SideCart