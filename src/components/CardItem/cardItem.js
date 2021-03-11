import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import style from './cardItem.module.scss'

console.log(style)
const Card = ({ card }) => {
	return (
		<Link to={`${card.node.category.slug}/${card.node.slug}`} className={style.card}>
			<Img fluid={card.node.cover.childImageSharp.fixed} className={style.cover} />
			<h2 className={style.title}>{card.node.title}</h2>
			<div className={style.info}>
				<p className={style.price}>{card.node.price + ' ₴'}</p>
			</div>
		</Link>
	)
}

export default Card