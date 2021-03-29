import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import CardRow from '../cardRow/cardRow'

const query = graphql`
{
	allStrapiCategory {
		edges {
			node {
				category
				slug
				id
			}
		}
	}
}
`

const CardRows = ({ title }) => {
	const data = useStaticQuery(query)
	// console.log(data)
	const categoriesBlog = data.allStrapiCategory.edges.map(c => {
		const { category, slug, id } = c.node;
		console.log(slug)
		return <CardRow title={title} name={category} slug={slug} key={id} />
	})
	return categoriesBlog
}

export default CardRows