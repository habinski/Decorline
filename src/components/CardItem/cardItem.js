import React from 'react'
import { Link, navigate } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import BuyButton from '../buyButton/buyButton'

import { cardboard, cover, title, info, price, buy } from './carditem.module.scss'
const Card = ({ card, category }) => {
	console.log(card)

	return (
		<div className={cardboard} key={card.id}>
			{/* <Link to={`/${card.category.slug}/${card.slug}`}> */}
			<GatsbyImage image={card.cover.childImageSharp.gatsbyImageData} className={cover} onClick={() => navigate(`/${card.category.slug}/${card.slug}`)} />
			{/* </Link> */}
			<Link to={`/${card.category.slug || category}/${card.slug}`} className={title}>{card.title}</Link>
			<div className={info}>
				<p className={price}>{card.price + '₴/метр погонний'}</p>
				<BuyButton product={card} />
			</div>
		</div>
	)
}

export default Card