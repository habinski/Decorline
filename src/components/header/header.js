import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"


// import Search from './search'

import Logo from '../../images/logos/inline-logo.svg'
import CardIcon from '../../images/icons/card.svg'
import Burger from '../../images/icons/burger.svg'
import SearchIcon from '../../images/icons/SearchIcon.svg'

import { logo, link, categoriesDiv, mobileNav, butterBtn, mobileCategoriesDiv, openMenu, openSearch, closeSearch } from './header.module.scss'
import Search from "./search"

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
	const [toggle, setToggle] = useState(false)
	// const [searchToggle, setSearchToggle] = useState(false)
	//

	//
	const categories = data.allStrapiCategory.edges.map(c => {
		return (
			<Link activeClassName="" to={`/category/${c.node.slug}`} key={c.node.strapiId} className={link}>{c.node.category}</Link>
		)
	})
	return (
		<>
			<header>
				<Link className={logo} to='/'><Logo /></Link>
				<div className={categoriesDiv}>
					{categories}

					<Link to='/cart'><CardIcon /></Link>
					<Search />
				</div>
				<div className={mobileNav}>
					<Link to='/cart'><CardIcon /></Link>
					<Search />

					<Burger className={butterBtn} onClick={() => setToggle(!toggle)} />
				</div>

			</header>
			<div className={`${mobileCategoriesDiv}  ${toggle ? openMenu : ''}`}>
				{categories}

			</div>

		</>
	)
}
export default Header