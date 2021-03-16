import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import Star from '../../../images/icons/star.svg'

import { reviewDiv, avatar, personName, work, stars, person } from './review.module.scss'

const Review = (review) => {
	review = review.review

	return (
		<div className={reviewDiv}>
			<div className={person}>
				<GatsbyImage className={avatar} image={review.photo.childImageSharp.gatsbyImageData} />
				<div>
					<h4 className={personName}>{review.name}</h4>
					<h5 className={work}>{review.work}</h5>
					<div className={stars}>
						{Array(review.stars).fill(<Star />)}
					</div>
				</div>
				<p>{review.review}</p>
			</div>
		</div>
	)
}

export default Review