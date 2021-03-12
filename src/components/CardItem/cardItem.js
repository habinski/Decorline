import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { cardboard, cover, title, info, price } from './cardItem.module.scss'

const Card = ({ card }) => {
	console.log(cover)
	return (
		<Link to={`${card.node.category.slug}/${card.node.slug}`} className={cardboard}>
			<GatsbyImage image={card.node.cover.childImageSharp.gatsbyImageData} className={cover} />
			<h2 className={title}>{card.node.title}</h2>
			<div className={info}>
				<p className={price}>{card.node.price + ' ₴'}</p>
			</div>
		</Link>
	)
}

export default Card