import React, { createContext, useState } from "react";

import { getCart, saveCart } from '../utils/cart'

export const CartContext = React.createContext(0) //null

export default ({ children }) => {
	const [cart, setCart] = useState(getCart())

	const updateCart = (updatedCart) => {
		setCart(updatedCart)
		saveCart(updatedCart)
	}

	const addToCart = (product, qty = 1) => {
		const copy = [...cart]
		//if poructs is alredy there
		const indexOfProduct = copy.findIndex((alreadyInCart) =>
			alreadyInCart.strapiId === product.strapiId
		)

		if (indexOfProduct !== -1) {
			//update the quantity
			copy[indexOfProduct].qty += parseInt(qty)

			if (copy[indexOfProduct].qty === 0) {
				//remove product
				copy.splice(indexOfProduct, 1)
			}
		}
		else {
			//set rhe qty to 1
			product.qty = parseInt(qty)
			//puch the product
			copy.push(product)
		}
		updateCart(copy)
	}

	const clearCart = () => {
		const updatedCart = []
		updateCart(updatedCart)
	}

	return (
		<CartContext.Provider value={{ cart, addToCart, clearCart }}>
			{children}
		</CartContext.Provider>
	)
}