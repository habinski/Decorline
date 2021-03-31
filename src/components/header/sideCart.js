import React, { useState } from "react"

import CartIcon from '../../images/icons/cart.svg'
import { useCart } from 'react-use-cart'

import { totalUnique, openBtn, sideCart, side, cart, openCart } from './sideCart.module.scss'
import CartItem from "./sideCartItem"

const SideCart = () => {
	const { totalUniqueItems, items } = useCart()
	const [cartToggle, setCartToggle] = useState()

	// console.log(items)

	return (
		<>
			<span className={openBtn} onClick={() => setCartToggle(!cartToggle)}><CartIcon /><span className={totalUnique}>{totalUniqueItems}</span></span>
			<div className={`${sideCart} ${cartToggle ? openCart : ''}`}>
				<div className={side} onClick={() => setCartToggle(!cartToggle)}></div>
				<div className={cart}>
					<h5>Мій кошик <span>{totalUniqueItems}</span></h5>
					<span onClick={() => { setCartToggle(!cartToggle) }}>*close</span>
					{
						items.map(item => {
							return (
								// <p>item</p>
								<CartItem key={item.id} product={item} />
							)
						})
					}
				</div>
			</div>
		</>
	)
}

export default SideCart