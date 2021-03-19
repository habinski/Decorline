import React, { useState } from "react"
// import Axios from "axios"
// import * as JsSearch from "js-search"
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link, graphql, useStaticQuery } from "gatsby"
import { searchBlock, searchItemResult, itemCover, itemTitle, results, openSearch, SearchBtn } from './search.module.scss'

import SearchIcon from '../../images/icons/SearchIcon.svg'
const query = graphql`
{
	allStrapiProduct {
	  edges {
		node {
		  id
		  title
		  slug
		  category {
			  slug
			category
		  }
		  cover {
			childImageSharp {
				gatsbyImageData(layout: CONSTRAINED, height: 500)
			}
		  }
		  price
		}
	  }
	}
  }
  `

const Search = () => {
	const data = useStaticQuery(query)
	const allProducts = data.allStrapiProduct.edges
	const [searchToggle, setSearchToggle] = useState(false)
	const [state, setState] = useState({
		filteredProducts: [],
		query: "",
	});
	const handleInputChange = event => {
		const query = event.target.value;
		const filteredProducts = allProducts.filter(poduct => {
			const { title, category } = poduct.node;

			return (
				title.toLowerCase().includes(query.toLowerCase())
			)
		});
		setState({
			query,
			filteredProducts,
		});
	};
	const products = state.query ? state.filteredProducts : allProducts;
	console.log(products)
	return (
		<>
			<SearchIcon className={SearchBtn} onClick={() => setSearchToggle(!searchToggle)} />

			<div className={`${searchBlock} ${searchToggle ? openSearch : ''}`}>
				<input
					type="text"
					aria-label="Search"
					placeholder="Search products"
					value={state.query}
					onChange={handleInputChange}
				/>
				<div className={results}>
					{
						products.map(product => {
							const { slug, category, cover, title } = product.node
							return (
								<Link to={`${category.slug}/${slug}`} className={searchItemResult}>
									<GatsbyImage className={itemCover} image={cover.childImageSharp.gatsbyImageData} />
									<p className={itemTitle}>{title}</p>
								</Link>
							)
						})}
				</div>
			</div>
		</>
	)
}
export default Search