import { graphql } from "gatsby"
import React from "react"
import ReactMarkdown from 'react-markdown'
import Layout from "../components/layout"
import SEO from "../components/seo"

import { terms, text, title, actualization } from '../styles/terms-of-use.module.scss'

export const query = graphql`
  {
	strapiTermsOfUse {
	  updated_at(formatString: "DD.MM.YYYY")
	  text
	}
  }
  `

const TermsOfUse = ({ data }) => (
	<Layout>
		<SEO title="Terms Of Use" />
		<section className={terms}>
			<h1 className={title}>Правила користування</h1>
			<h5 className={actualization}>Остання актуалізація: <time>{data.strapiTermsOfUse.updated_at}</time></h5>
			<div className={text}>
				<ReactMarkdown>{data.strapiTermsOfUse.text}</ReactMarkdown>
			</div>
		</section>
	</Layout>
)

export default TermsOfUse
