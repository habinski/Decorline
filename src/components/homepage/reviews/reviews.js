import React from 'react'

import Review from './review'
import s from './reviews.module.scss'

const Rewiews = ({ reviews }) => {
	console.log(reviews)
	const reviewsBlock = reviews.map(review => {
		return <Review review={review} />
	})
	return (
		<div className={s.reviewsBlock}>
			<h2>Відгуки наших клієнтів</h2>
			<div className={s.reviews}>
				{reviewsBlock}
			</div>
		</div>
	)
}

export default Rewiews