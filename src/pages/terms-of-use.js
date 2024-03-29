import { graphql } from "gatsby"
import React from "react"
import ReactMarkdown from 'react-markdown'
import Layout from "../components/layout"
import SEO from "../components/seo"

import { content, text, title, actualization } from '../styles/infoPages.module.scss'

export const query = graphql`
  {
	strapiTermsOfUse {
	  updated_at(formatString: "DD.MM.YYYY")
	  content
	  title
	}
  }
  `

const TermsOfUse = ({ data }) => (
	<Layout>
		<SEO title="Правила користовання" />
		<section className={content}>
			<h1 className={title}>{data.strapiTermsOfUse.title}</h1>
			<h5 className={actualization}>Остання актуалізація: <time>{data.strapiTermsOfUse.updated_at}</time></h5>
			<div className={text}>
				<ReactMarkdown>{data.strapiTermsOfUse.content}</ReactMarkdown>
			</div>
		</section>
	</Layout>
)

export default TermsOfUse
