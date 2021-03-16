import React from 'react'

import Review from './review'
import { reviewsContainer, reviewsDiv } from './reviews.module.scss'

const Rewiews = ({ reviews }) => {

	const reviewsBlock = reviews.map(review => {
		return <Review review={review} />
	})
	return (
		<section className={reviewsContainer}>
			<h2>Відгуки наших клієнтів</h2>
			<div className={reviewsDiv}>
				{reviewsBlock}
			</div>
		</section>
	)
}

export default Rewiews