import React from 'react'

import { GatsbyImage } from 'gatsby-plugin-image'

import { aboutSection, aboutContent } from './about.module.scss'

const About = ({ about }) => {
	console.log(about)
	return (
		<section className={aboutSection}>
			<h2>Про нас</h2>
			<div className={aboutContent}>
				<p>{about.about}</p>
				<GatsbyImage image={about.image.childImageSharp.gatsbyImageData} />
			</div>
		</section>
	)
}
export default About