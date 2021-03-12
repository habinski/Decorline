import React from 'react'
import gatsby, { Link } from 'gatsby'
import Img from 'gatsby-image'
import Card from '../../CardItem/cardItem'
import { cardsRowDiv, quote, categoryName, cardsDiv } from './cardRow.module.scss'

const CardRow = ({ cards, name, slug }) => {
	const cardsRow = cards.map(card => {
		return <Card card={card} key={card.strapiId} />
	})
	console.log(cards)

	return (
		<div className={cardsRowDiv}>
			<div className={quote}>
				<h2>Ознайомтеся з каталогом <Link to={`cards/${slug}`} className={categoryName}>{name}</Link></h2>
				<Link to={`cards/${slug}`}>Усі</Link></div>
			<div className={cardsDiv}>
				{cardsRow}
			</div>
		</div>
	)
}

export default CardRow