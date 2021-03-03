import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Logo from '../../images/logos/inline-logo.svg'
import CardIcon from '../../images/icons/card.svg'
import variables from '../../styles/_variables.scss'
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
				<Link to='/cart'><CardIcon /></Link>
			</div>
		</header>
	)
}
export default Header