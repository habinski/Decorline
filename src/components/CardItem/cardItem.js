import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { cardboard, cover, title, info, price } from './cardItem.module.scss'

const Card = ({ card }) => {
	console.log(cover)
	return (
		<Link to={`${card.node.category.slug}/${card.node.slug}`} className={cardboard}>
			<Img fluid={card.node.cover.childImageSharp.fixed} className={cover} />
			<h2 className={title}>{card.node.title}</h2>
			<div className={info}>
				<p className={price}>{card.node.price + ' ₴'}</p>
			</div>
		</Link>
	)
}

export default Card