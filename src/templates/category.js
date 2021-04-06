import React, { useState } from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardItem from '../components/CardItem/cardItem'
const Category = ({ pageContext }) => {
	const { category, products } = pageContext.category.node
	console.log(products)
	return (
		<Layout >
			<SEO title={category} />
			<h1>Welcome to {category} page</h1>
			{
				products.map(product => {
					return (
						<CardItem product={product} />
						// <p>{product.title}</p>
					)
				})
			}
		</Layout>
	)
}
export default Category
