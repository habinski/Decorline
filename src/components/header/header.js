import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Logo from '../../images/logos/inline-logo.svg'
import CardIcon from '../../images/icons/card.svg'

import { link, categoriesDiv } from './header.module.scss'

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

	const data = useStaticQuery(query)
	const categories = data.allStrapiCategory.edges.map(c => {
		return (
			<Link activeClassName="" to={`/category/${c.node.slug}`} key={c.node.strapiId} className={link}>{c.node.category}</Link>
		)
	})
	return (
		<header>
			<Logo />
			<div className={categoriesDiv}>
				{categories}
				<Link to='/cart'><CardIcon /></Link>
			</div>
		</header>
	)
}
export default Header