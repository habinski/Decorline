import { graphql } from "gatsby"
import React from "react"
import ReactMarkdown from 'react-markdown'
import Layout from "../components/layout"
import SEO from "../components/seo"

import { content, text, title, actualization } from '../styles/infoPages.module.scss'

export const query = graphql`
{
	strapiPrivacyPolicy {
	  updated_at(formatString: "DD.MM.YYYY")
	  content
	  title
	}
  }
  
  `

const PrivacyPolicy = ({ data }) => (
	<Layout>
		<SEO title="Політика конфіденційності" />
		<section className={content}>
			<h1 className={title}>{data.strapiPrivacyPolicy.title}</h1>
			<h5 className={actualization}>Остання актуалізація: <time>{data.strapiPrivacyPolicy.updated_at}</time></h5>
			<div className={text}>
				<ReactMarkdown>{data.strapiPrivacyPolicy.content}</ReactMarkdown>
			</div>
		</section>
	</Layout>
)

export default PrivacyPolicy
