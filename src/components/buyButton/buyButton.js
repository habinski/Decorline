import React, { useState } from 'react'
import AddToCart from '../../images/icons/AddToCart.svg'
import { useCart } from 'react-use-cart'

import { buy, counter, BuyBlock } from './buyButton.module.scss'

const BuyButton = ({ title, product }) => {
	const { addItem, updateItemQuantity, removeItem, inCart, items, updateItem, emptyCart } = useCart()

	const [count = 1, setCount] = useState(0);
	const toCart = () => {
		inCart(product.id) ? updateItemQuantity(product.id, count) : addItem(product, count)
		setInterval(console.log(items), 2000)
	}

	return (
		<div className={BuyBlock}>
			{/* <input onChange={toCart} /> */}
			<div className={counter}>
				<button onClick={() => setCount(count + 1)}>+</button>
				<span>{count}</span>
				<button onClick={() => setCount(count > 0 ? count - 1 : count)}>-</button>
			</div>
			{/* <button onClick={() => emptyCart}>del</button> */}
			<button className={buy} onClick={toCart}>{title} <AddToCart /></button>
		</div >
	)
}

export default BuyButton