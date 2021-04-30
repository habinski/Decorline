import React from 'react'

import axios from 'axios';


import { useCart } from 'react-use-cart'


const Q = () => {
	const { items } = useCart()
	alert(useCart())
	this.setState({
		order: items
	});
}


export default class OrderForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			firstname: null,
			surname: null,
			phone: null,
			email: null,
			city: null,
			address: null,
			message: null,
			order: [],
			//atentification key
			jwt: null
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange = (event) => {

		console.log(this.state.order)
		const name = event.target.name;
		this.setState({
			[name]: event.target.value
		});
		console.log(this.state)
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const { data } = await axios.post(`${process.env.GATSBY_API_URL}/auth/local`, {
				identifier: process.env.GATSBY_API_EMAIL,
				password: process.env.GATSBY_API_PASSWORD,
			})
			this.setState({
				jwt: data.jwt
			})
		}
		catch (error) {
			alert(error)
		}

		try {
			await axios.post(`${process.env.GATSBY_API_URL}/orders`, {
				headers: {
					Authorization: this.state.jwt
				},

				person: {
					name: this.state.firstname,
					surname: this.state.surname,
					phone: this.state.phone,
					email: this.state.email,
				},
				city: this.state.city,
				address: this.state.address,
				message: this.state.message,
				products: 1,

			})
		}
		catch (error) {
			alert(error)
		};
	}


	render() {
		return (
			<form onSubmit={this.handleSubmit}>

				<input type="text" placeholder="Ім'я" name='firstname' onChange={this.handleChange} required />
				<input type="text" placeholder="Фамілія" name='surname' required onChange={this.handleChange} />
				<input type="email" placeholder="Імейл" name='email' required onChange={this.handleChange} />
				<input type="text" placeholder="Misto" name='city' required onChange={this.handleChange} />
				<input type="text" placeholder="Адреса доставки" name='address' required onChange={this.handleChange} />
				<input type="tel" name='phone' placeholder="Номер телефону" required onChange={this.handleChange} />
				<textarea placeholder="Повідомлення" name='message' onChange={this.handleChange} />
				<button >`aaa`</button>
			</form>
		)
	}
}
// import React, { useState } from 'react'

// import axios from 'axios';


// import { useCart } from 'react-use-cart'



// export default function OrderForm() {
// 	const [firstname, setFirstname] = useState(null)
// 	const [surname, setSurname] = useState(null)
// 	const [phone, setPhone] = useState(null)
// 	const [email, setEmail] = useState(null)
// 	const [city, setCity] = useState(null)
// 	const [address, setAddress] = useState(null)
// 	const [message, setMessage] = useState(null)

// 	const [jwt, setJWT] = useState(null)
// 	const { items } = useCart()


// 	// const handleChange = (event) => {


// 	// 	const name = event.target.name;
// 	// 	// this.setState({
// 	// 	// 	[name]: event.target.value
// 	// 	// });
// 	// 	// console.log(this.state)
// 	// }

// 	const handleSubmit = async (event) => {
// 		event.preventDefault();
// 		try {
// 			const { data } = await axios.post(`${process.env.GATSBY_API_URL}/auth/local`, {
// 				identifier: process.env.GATSBY_API_EMAIL,
// 				password: process.env.GATSBY_API_PASSWORD,
// 			})
// 			setJWT(data.jwt)
// 		}
// 		catch (error) {
// 			alert(error)
// 		}

// 		try {
// 			await axios.post(`${process.env.GATSBY_API_URL}/orders`, {
// 				headers: {
// 					Authorization: this.state.jwt
// 				},

// 				person: {
// 					name: this.state.firstname,
// 					surname: this.state.surname,
// 					phone: this.state.phone,
// 					email: this.state.email,
// 				},
// 				city: this.state.city,
// 				address: this.state.address,
// 				message: this.state.message,
// 				products: 1,

// 			})
// 		}
// 		catch (error) {
// 			alert(error)
// 		};
// 	}


// 	// render() {
// 	return (
// 		<form onSubmit={this.handleSubmit}>

// 			<input type="text" placeholder="Ім'я" name='firstname' onChange={handleChange} required />
// 			<input type="text" placeholder="Фамілія" name='surname' required onChange={this.handleChange} />
// 			<input type="email" placeholder="Імейл" name='email' required onChange={this.handleChange} />
// 			<input type="text" placeholder="Misto" name='city' required onChange={this.handleChange} />
// 			<input type="text" placeholder="Адреса доставки" name='address' required onChange={this.handleChange} />
// 			<input type="tel" name='phone' placeholder="Номер телефону" required onChange={this.handleChange} />
// 			<textarea placeholder="Повідомлення" name='message' onChange={this.handleChange} />
// 			<button >`aaa`</button>
// 		</form>
// 	)
// 	// }
// }