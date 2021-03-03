import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Logo from '../../images/logos/inline-logo.svg'
import headerStyle from './header.module.scss'


const query = graphql`
  query {
    allStrapiCategory {
      edges {
        node {
          strapiId
          category
		  slug
        }
      }
    }
  }
`;


const Header = () => {
	console.log(headerStyle.link)
	const data = useStaticQuery(query)
	const categories = data.allStrapiCategory.edges.map(c => {
		return (
			<Link activeClassName="" to={`/category/${c.node.slug}`} key={c.node.strapiId} className={headerStyle.link}>{c.node.category}</Link>
		)
	})
	return (
		<header>
			<Logo />
			<div className={headerStyle.categories}>
				{categories}
			</div>
		</header>
	)
}
export default Header