import React from 'react'
import gatsby from 'gatsby'
import Img from 'gatsby-image'
import Card from '../CardItem/cardItem'
// import style from './cardItem.scss'

const CardRow = ({ cards }) => {
	const cardsRow = cards.map(card => {
		return <Card card={card} key={card.strapiId} />
	})
	console.log(cards)

	return (
		<div className="cadsRow">
			{cardsRow}
		</div>
	)
}

export default CardRow