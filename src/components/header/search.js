import React, { useState } from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link, graphql, useStaticQuery } from "gatsby"
import { sideSearch, search, searchItemResult, itemCover, itemTitle, results, openSearch, SearchBtn, cardInfo, greyText, notFoundText, side } from './search.module.scss'

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
			const { title } = poduct.node;

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

	return (
		<>
			<span className={SearchBtn} onClick={() => setSearchToggle(!searchToggle)} ><SearchIcon /></span>


			<div className={`${sideSearch} ${searchToggle ? openSearch : ''}`}>
				<div className={search}>
					<input
						type="text"
						aria-label="Search"
						placeholder="Що шукаємо?"
						value={state.query}
						onChange={handleInputChange}
					/>
					<div className={results}>
						{
							products.map(product => {
								const { slug, cover, title, category } = product.node
								return (
									<Link to={`/${slug}`} className={searchItemResult} key={slug}>
										<GatsbyImage className={itemCover} image={cover.childImageSharp.gatsbyImageData} />
										<div className={cardInfo}>
											<p className={itemTitle}>{title} </p>
											<p className={greyText}>{category.category}</p>
										</div>
									</Link>
								)
							})}
					</div>
				</div>
				<div className={side} onClick={() => setSearchToggle(!searchToggle)}></div>
			</div>
		</>
	)
}
export default Search