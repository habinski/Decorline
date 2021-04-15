import React from 'react'
import { Link, navigate } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import BuyButton from '../buyButton/buyButton'

import { cardboard, cover, title, info, price } from './carditem.module.scss'
const Card = ({ card }) => {

	return (
		<div className={cardboard} key={card.strapiId}>
			<GatsbyImage image={card.cover.childImageSharp.gatsbyImageData} className={cover} onClick={() => navigate(`/${card.slug}`)} />
			<Link to={`/${card.slug}`} className={title}>{card.title}</Link>
			<div className={info}>
				<p className={price}>{`${card.price}₴`} <span>| метр погонний</span></p>
				<BuyButton product={card} />
			</div>
		</div>
	)
}

export default Card