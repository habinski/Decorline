import React, { useState } from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardItem from '../components/CardItem/cardItem'

import { main, grid } from '../styles/category.module.scss'

const Category = ({ pageContext }) => {
	const { category, products, slug } = pageContext.category.node
	console.log(pageContext)
	return (
		<Layout >
			<SEO title={category} />
			<div className={main}>
				<h1>Welcome to {category} page</h1>
				<div className={grid}>
					{
						products.map(product => {
							return (
								<CardItem card={product} category={slug} />
							)
						})
					}
				</div></div>
		</Layout>
	)
}
export default Category
