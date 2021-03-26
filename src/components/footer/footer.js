import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Logo from '../../images/logos/footer-logo.svg'


import { copyright, content, items, logo, link, categoriesDiv } from './footer.module.scss'

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


const Footer = () => {

	const data = useStaticQuery(query)
	const categories = data.allStrapiCategory.edges.map(c => {
		return (
			<Link activeClassName="" to={`/${c.node.slug}`} key={c.node.strapiId} className={link}>{c.node.category}</Link>
		)
	})
	return (
		<footer>
			<div className={content}>
				<Link className={logo} to='/'><Logo /></Link>
				<div className={items}>
					<h5>Компанія</h5>
					<div className={items}>
						<Link to='/about'>Про Decorline</Link>
						<Link to='/how-it-works'>Як ми працюємо</Link>
						<Link to='/delivery'>Доставка</Link></div>
				</div>
				<div className={items}>
					<h5>Пропозиції</h5>

					<div className={items}>
						{categories}
					</div>
				</div>
				<div className={items}>
					<h5>Право</h5>

					<div className={items}>
						<Link to='/terms-of-use'>Правила користування</Link>
						<Link to='/privacy-policy'>Політика конфіденційності</Link>
					</div>
				</div>
			</div>
			<div className={copyright}>
				<p>© {new Date().getFullYear()} Decorline</p>
			</div>
		</footer>
	)
}
export default Footer