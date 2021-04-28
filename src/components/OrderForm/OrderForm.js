import React from 'react'

import axios from 'axios';

// require('dotenv').config()


// const { data } = axios.post(`${process.env.API_URL}/auth/local`, {
// 	identifier: process.env.GATSBY_API_EMAIL,
// 	password: process.env.GATSBY_API_PASSWORD,
// });

// console.log(data);

export default class OrderForm extends React.Component {


	handleSubmit = (event) => {

	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="name" />
				<input type="email" />
				<input type="text" />
				<button>Скласти замолвення</button>
			</form>
		)
	}
}