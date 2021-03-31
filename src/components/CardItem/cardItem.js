import React from 'react'
import { Link, navigate } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import BuyButton from '../buyButton/buyButton'

import { cardboard, cover, title, info, price, buy } from './cardItem.module.scss'
const Card = ({ card }) => {


	return (
		<div className={cardboard} key={card.node.strapiId}>

			<GatsbyImage image={card.node.cover.childImageSharp.gatsbyImageData} className={cover} onClickCapture={() => navigate(`/${card.node.category.slug}/${card.node.slug}`)} />
			<Link to={`/${card.node.category.slug}/${card.node.slug}`} className={title}>{card.node.title}</Link>
			<div className={info}>
				<p className={price}>{card.node.price + ' ₴'}</p>
				<div className={buy}>
					<BuyButton product={card.node} />
				</div></div>
		</div>
	)
}

export default Card

//6:38