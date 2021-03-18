import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"


import Search from './search'

import Logo from '../../images/logos/inline-logo.svg'
import CardIcon from '../../images/icons/card.svg'
import Burger from '../../images/icons/burger.svg'

import { logo, link, categoriesDiv, mobileNav, butterBtn, mobileCategoriesDiv, openMenu } from './header.module.scss'

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
	const [toggle, setToggle] = useState(false)
	const data = useStaticQuery(query)
	const categories = data.allStrapiCategory.edges.map(c => {
		return (
			<Link activeClassName="" to={`/category/${c.node.slug}`} key={c.node.strapiId} className={link}>{c.node.category}</Link>
		)
	})
	return (
		<header>
			<Link className={logo} to='/'><Logo /></Link>
			<div className={categoriesDiv}>
				{categories}
				<Search />
				<Link to='/cart'><CardIcon /></Link>
			</div>
			<div className={mobileNav}>
				<Link to='/cart'><CardIcon /></Link>
				<Burger className={butterBtn} onClick={() => setToggle(!toggle)} />

			</div>
			<div
				className={`${mobileCategoriesDiv}  ${toggle ? openMenu : ''}`}>
				{categories}
			</div>
		</header>
	)
}
export default Header