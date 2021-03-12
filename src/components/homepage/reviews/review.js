import React from 'react'

import Img from "gatsby-image";

import Star from '../../../images/icons/star.svg'

import { reviewDiv, avatar, personName, work, stars } from './review.module.scss'

const Review = (review) => {
	review = review.review

	return (
		<div className={reviewDiv}>
			<Img className={avatar} fluid={review.photo.childImageSharp.fluid} />
			<div>
				<h4 className={personName}>{review.name}</h4>
				<h5 className={work}>{review.work}</h5>
				<div className={stars}>
					{Array(review.stars).fill(<Star />)}
				</div>
				<p>{review.review}</p>
			</div>
		</div>
	)
}

export default Review