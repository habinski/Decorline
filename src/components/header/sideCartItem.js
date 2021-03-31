import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// import BuyButton from '../../components/buyButton/buyButton'

import { cartItem, info } from './sideCartItem.module.scss'

export default function CartItem({ product }) {
	console.log(product)
	return (
		<div className={cartItem}>
			<GatsbyImage image={product.cover.childImageSharp.gatsbyImageData} />
			<div className={info}>
				<p>{product.title}</p>
				<p>{product.quantity}</p>
				<p>{product.itemTotal}</p>
			</div>
		</div>
	)
}