import React from "react";
import { CartProvider } from "react-use-cart";

// export default ({ element }) => (
// 	<CartProvider>{element}</CartProvider>
// );


export const wrapPageElement = ({ element }) => (
	<>
		<CartProvider>{element}</CartProvider>
	</>
)