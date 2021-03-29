import React from 'react'
import gatsby, { Link } from 'gatsby'

import Card from '../CardItem/cardItem'
import { cardsRowDiv, quote, categoryName, cardsDiv, carousel, allBtn } from './cardRow.module.scss'
import ArrowIcon from '../../images/icons/arrow.svg'






const CardRow = ({ data, category, title, slug }) => {

	console.log(data.edges)
	const cardsRow = data.edges.map(card => {
		return <Card card={card} key={card.strapiId} />
	})


	return (
		<section className={cardsRowDiv}>
			<div className={quote}>
				<h2>{title} <Link to={`/${slug}`} className={categoryName}>{category}</Link></h2>
				<Link className={allBtn} to={`${slug}`}>Усі<ArrowIcon /></Link></div>
			<div className={cardsDiv}>
				<div className={carousel}>
					{cardsRow}
				</div>
			</div>
		</section>
	)
}

export default CardRow