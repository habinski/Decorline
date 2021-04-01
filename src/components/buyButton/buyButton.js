import React, { useState } from 'react'
import AddToCart from '../../images/icons/AddToCart.svg'
import MinusIcon from '../../images/icons/minus.svg'
import PlusIcon from '../../images/icons/plus.svg'
import { useCart } from 'react-use-cart'

import { buy, counter, BuyBlock } from './buyButton.module.scss'

const BuyButton = ({ title, product }) => {
	const { addItem, updateItemQuantity, removeItem, inCart, items, updateItem, emptyCart, getItem } = useCart()
	// console.log(inCart(product.id))
	const [count, setCount] = useState(1);


	function whatText() {
		if (title) {
			if (inCart(product.id) && getItem(product.id).quantity === count) {
				return (`Додано до кошика`)
			}
			else if (inCart(product.id) && getItem(product.id).quantity !== count && count !== 0) {
				return ('Змінити у кошику')
			}
			else if (inCart(product.id) && count === 0) {
				return (`Видалити з кошика`)
			}
			else {
				return (`Додати у кошик`)
			}
		}
	}

	const toCart = () => {
		inCart(product.id) ? updateItemQuantity(product.id, count) : addItem(product, count)
		// setInterval(console.log(items), 2000)
	}

	return (
		<div className={BuyBlock}>
			{/* <input onChange={toCart} /> */}
			<div className={counter}>
				<button onClick={() => setCount(count > 0 ? count - 1 : count)}><MinusIcon /></button>
				<span>{count}</span>
				<button onClick={() => setCount(count + 1)}><PlusIcon /></button>
			</div>
			{/* <button onClick={() => emptyCart}>del</button> */}
			<button className={buy} onClick={toCart}>
				<p>
					{whatText()}
				</p> <AddToCart /></button>
		</div >
	)
}

export default BuyButton