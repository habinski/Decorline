import React from 'react'
import gatsby, { Link } from 'gatsby'
import Img from 'gatsby-image'
import Card from '../../CardItem/cardItem'
import s from './cardRow.module.scss'

const CardRow = ({ cards, name, slug }) => {
	const cardsRow = cards.map(card => {
		return <Card card={card} key={card.strapiId} />
	})
	console.log(cards)

	return (
		<div className={s.cadsRow}>
			<div className={s.quote}>
				<h2>Ознайомтеся з каталогом <Link to={`cards/${slug}`} className={s.name}>{name}</Link></h2>
				<Link to={`cards/${slug}`}>Усі</Link></div>
			<div className={s.cards}>
				{cardsRow}
			</div>
		</div>
	)
}

export default CardRow