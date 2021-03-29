import React from 'react'
import gatsby, { Link, useStaticQuery, graphql } from 'gatsby'

import Card from '../CardItem/cardItem'
import { cardsRowDiv, quote, categoryName, cardsDiv, carousel, allBtn } from './cardRow.module.scss'
import ArrowIcon from '../../images/icons/arrow.svg'
const query = graphql`
query cardRow($slug: String) {
	products: allStrapiProduct(
	  limit: 10
	  sort: {order: DESC, fields: published_at}
	  filter: {category: {slug: {eq: $slug}}}
	) {
	  edges {
		node {
		  category {
			category
			id
			slug
		  }
		  strapiId
		  slug
		  price
		  id
		  title
		  cover {
			childImageSharp {
			  gatsbyImageData(layout: CONSTRAINED, height: 1920)
			  id
			}
		  }
		}
	  }
	}
  }

`


const CardRow = ({ title, name, slug = '' }) => {
	let data = useStaticQuery(query)
	// console.log(slug)
	// console.log(data)
	const cardsRow = data.products.edges.map(card => {
		return <Card card={card} key={card.strapiId} />
	})
	// console.log(cards)

	return (
		<section className={cardsRowDiv}>
			<div className={quote}>
				<h2>{title} <Link to={`/${slug}`} className={categoryName}>{name}</Link></h2>
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