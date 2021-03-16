import React from 'react'
import gatsby, { Link } from 'gatsby'

import Card from '../../CardItem/cardItem'
import { cardsRowDiv, quote, categoryName, cardsDiv, carousel } from './cardRow.module.scss'

const CardRow = ({ cards, name, slug }) => {
	const cardsRow = cards.map(card => {
		return <Card card={card} key={card.strapiId} />
	})
	console.log(cards)

	return (
		<section className={cardsRowDiv}>
			<div className={quote}>
				<h2>Ознайомтеся з каталогом <Link to={`cards/${slug}`} className={categoryName}>{name}</Link></h2>
				<Link to={`cards/${slug}`}>Усі</Link></div>
			<div className={cardsDiv}>
				<div className={carousel}>
					{cardsRow}
				</div>
			</div>
		</section>
	)
}

export default CardRow