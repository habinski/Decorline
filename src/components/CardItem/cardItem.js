import React, { useState, useContext } from 'react'
import { Link, navigate } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useShoppingCart } from 'use-shopping-cart'


import { cardboard, cover, title, info, price, buy } from './cardItem.module.scss'
const Card = ({ card }) => {
	const { addItem } = useShoppingCart()

	return (
		<div className={cardboard}>
			<GatsbyImage image={card.node.cover.childImageSharp.gatsbyImageData} className={cover} onClickCapture={() => navigate(`${card.node.category.slug}/${card.node.slug}`)} />
			<Link to={`${card.node.category.slug}/${card.node.slug}`} className={title}>{card.node.title}</Link>
			<div className={info}>
				<p className={price}>{card.node.price + ' ₴'}</p>
				<div className={buy}>
					<input type="number" />
					<button
						onClick={() => addItem(card.node)}

					>add to cart</button>
				</div></div>
		</div>
	)
}

export default Card

//6:38