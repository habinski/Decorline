import React from 'react'
import { CartProvider } from 'use-shopping-cart'

export default ({ element }) => (
	<CartProvider store={createStore()}>{element}</CartProvider>
);

