import { graphql } from "gatsby"
import React from "react"
import ReactMarkdown from 'react-markdown'
import Layout from "../components/layout"
import SEO from "../components/seo"

import { content, text, title, actualization } from '../styles/infoPages.module.scss'

export const query = graphql`
{
	strapiHowItWorks {
	  updated_at(formatString: "DD.MM.YYYY")
	  content
	  title
	}
  }
  
  `

const PrivacyPolicy = ({ data }) => (
	<Layout>
		<SEO title="Як ми працюємо" />
		<section className={content}>
			<h1 className={title}>{data.strapiHowItWorks.title}</h1>
			<h5 className={actualization}>Остання актуалізація: <time>{data.strapiHowItWorks.updated_at}</time></h5>
			<div className={text}>
				<ReactMarkdown>{data.strapiHowItWorks.content}</ReactMarkdown>
			</div>
		</section>
	</Layout>
)

export default PrivacyPolicy
