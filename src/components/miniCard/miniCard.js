import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// import BuyButton from '../../components/buyButton/buyButton'
import RemoveItem from '../../images/icons/removeItem.svg'
import { useCart } from 'react-use-cart'
import { cartItem, info, removeBtn, inline, cover } from './miniCard.module.scss'
import { Link, navigate } from 'gatsby'

export default function CartItem({ product }) {
	const { removeItem } = useCart()
	return (
		<div className={cartItem}>

			<GatsbyImage className={cover} image={product.cover.childImageSharp.gatsbyImageData} onClick={() => navigate(`/${product.slug}`)} />

			<div className={info}>
				<Link to={`/${product.slug}`}>
					<p>{product.title}</p>
				</Link>
				<div className={inline}>
					<p> <span>[{product.quantity}]</span> {product.itemTotal}₴</p>
					<button className={removeBtn} onClick={() => {
						removeItem(product.id)
					}}><RemoveItem /></button>
				</div>
			</div>
		</div>
	)
}