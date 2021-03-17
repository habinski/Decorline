
export const save = (cart) => {
	localStorage.setItem('cart', JSON.stringify(cart))
}

export const getCart = () => {
	try {
		const cart = JSON.parse(localStorage.getItem('cart'))
		if (cart) {
			return cart
		}
	} catch (err) {


	}
	return []
}

export const cartSubotal = (cart) => {
	//sum up all of the individual products costs
	const subTotal = cart.reduce((counter, product) => {
		return counter + product.price * product.qty
	}, 0)
	return subTotal
}

export const cartTotal = (cart) => {
	if (cart.lenght === 0) {
		return 0
	}

	const subTotal = cartSubotal(cart)

	const total = subTotal

	return total

}