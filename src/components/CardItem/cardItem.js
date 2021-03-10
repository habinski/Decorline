import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import style from './cardItem.scss'

const Card = ({ card }) => {
	return (
		<Link to={`${card.node.category.slug}/${card.node.slug}`} className={style.card}>
			<Img fluid={card.node.miniCover.childImageSharp.fixed} />
			<div className={style.info}>
				<h2 className={style.title}>{card.node.title}</h2>
				<p className={style.price}>{card.node.price + ' ₴'}</p>
			</div>
		</Link>
	)
}

export default Card