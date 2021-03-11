import React from 'react'

import Img from "gatsby-image";


import Star from '../../../images/icons/star.svg'

import s from './review.module.scss'

const Review = (review) => {
	review = review.review

	return (
		<div className={s.review}>
			<Img className={s.avatar} fluid={review.photo.childImageSharp.fluid} />
			<div className={s.info}>
				<h4 className={s.name}>{review.name}</h4>
				<h5 className={s.work}>{review.work}</h5>
				<div className={s.stars}>
					{Array(review.stars).fill(<Star />)}
				</div>
				<p>{review.review}</p>
			</div>
		</div>
	)
}

export default Review