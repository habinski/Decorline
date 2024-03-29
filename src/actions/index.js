// import shop from '../api/shop'
// import * as types from '../constants/ActionTypes'

//constants
const ADD_TO_CART = 'ADD_TO_CART'
const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS'
const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE'
const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'


const receiveProducts = products => ({
	type: RECEIVE_PRODUCTS,
	products
})

// export const getAllProducts = () => dispatch => {
// 	shop.getProducts(products => {
// 		dispatch(receiveProducts(products))
// 	})
// }

const addToCartUnsafe = productId => ({
	type: ADD_TO_CART,
	productId
})

export const addToCart = productId => (dispatch, getState) => {
	if (getState().products.byId[productId].inventory > 0) {
		dispatch(addToCartUnsafe(productId))
	}
}

// export const checkout = products => (dispatch, getState) => {
// 	const { cart } = getState()

// 	dispatch({
// 		type: CHECKOUT_REQUEST
// 	})
// 	shop.buyProducts(products, () => {
// 		dispatch({
// 			type: CHECKOUT_SUCCESS,
// 			cart
// 		})
// 		// Replace the line above with line below to rollback on failure:
// 		// dispatch({ type: CHECKOUT_FAILURE, cart })
// 	})
// }
