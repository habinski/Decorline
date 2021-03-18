import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

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
			category
		  }
		  cover {
			childImageSharp {
			  gatsbyImageData
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
	console.log(data)
	// const { data } = props
	const allItems = data.allStrapiProduct.edges

	const emptyQuery = ""

	const [state, setState] = useState({
		filteredData: [],
		query: emptyQuery,
	})

	const handleInputChange = event => {
		console.log(event.target.value)
		const query = event.target.value
		// const { data } = props

		const products = data.allStrapiProduct.edges || []

		const filteredData = products.filter(product => {
			const { description, title, tags } = product.node.frontmatter
			return (
				description.toLowerCase().includes(query.toLowerCase()) ||
				title.toLowerCase().includes(query.toLowerCase()) ||
				(tags &&
					tags
						.join("")
						.toLowerCase()
						.includes(query.toLowerCase()))
			)
		})

		setState({
			query,
			filteredData,
		})
	}

	const { filteredData, query } = state
	const hasSearchResults = filteredData && query !== emptyQuery
	const products = hasSearchResults ? filteredData : allItems

	return (
		<div>
			<h1 style={{ textAlign: `center` }}>Writing</h1>

			<div className="searchBox">
				<input
					className="searchInput"
					type="text"
					aria-label="Search"
					placeholder="Type to filter products..."
					onChange={handleInputChange}
				/>
			</div>

			{products.map(({ node }) => {
				const { category } = node.category
				const { title, slug } = node
				return (
					<article key={slug}>
						<header>
							<h2>
								<Link to={`${category}/${slug}`}>{title}</Link>
							</h2>
						</header>
						<hr />
					</article>
				)
			})}
		</div>
	)
}




export default Search



//   query {
//     allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
//       edges {
//         node {
//           excerpt(pruneLength: 200)
//           id
//           frontmatter {
//             title
//             description
//             date(formatString: "MMMM DD, YYYY")

//             tags
//           }

//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }