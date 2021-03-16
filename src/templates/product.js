import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
// import { GatsbyImage } from 'gatsby-plugin-image'

import SEO from "../components/seo"
import Layout from "../components/layout"


export const query = graphql`
query ProductQuery($id: Int!) {
	products: strapiProduct(strapiId: {eq: $id}) {
	  strapiId
	  title
	  slug
	  category {
		category
		slug
		id
	  }
	  cover {
		childImageSharp {
		  gatsbyImageData(layout: CONSTRAINED, height: 1200)
		}
	  }
	  gallery {
		image {
		  childImageSharp {
			gatsbyImageData(layout: CONSTRAINED, height: 1200)
		  }
		}
	  }
	  information {
		argument
		id
		value
	  }
	}
  }
`

const Product = ({ data }, location) => {
	// const data = useStaticQuery(query)
	console.log(data)
	return (
		<Layout>
			<h1>hm</h1>
		</Layout>
	)
}

export default Product