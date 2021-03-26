import React from 'react'

import { GatsbyImage } from 'gatsby-plugin-image'

import { aboutSection, aboutContent, image } from './about.module.scss'

const About = ({ about }) => {
	return (
		<section className={aboutSection}>
			<h2>Про нас</h2>
			<div className={aboutContent}>
				<p>{about.about}</p>

				<GatsbyImage className={image} image={about.image.childImageSharp.gatsbyImageData} />
			</div>
		</section>
	)
}
export default About