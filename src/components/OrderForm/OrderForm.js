import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const OrderForm = ({ cities }) => (
	<div>
		<h1>Sign Up</h1>
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
			}}
			onSubmit={async (values) => {
				await new Promise((r) => setTimeout(r, 500));
				alert(JSON.stringify(values, null, 2));
			}}
		>
			<Form>
				<label htmlFor="firstName">First Name</label>
				<Field id="firstName" name="firstName" placeholder="Jane" />

				<label htmlFor="lastName">Last Name</label>
				<Field id="lastName" name="lastName" placeholder="Doe" />

				<label htmlFor="email">Email</label>
				<Field
					id="email"
					name="email"
					placeholder="jane@acme.com"
					type="email"
				/>
				<button type="submit">Submit</button>
			</Form>
		</Formik>
	</div>
);

export default OrderForm


{/* <form onSubmit={this.handleSubmit}>

<input type="text" placeholder="Ім'я" name='firstname' onChange={this.handleChange} required />
<input type="text" placeholder="Фамілія" name='surname' required onChange={this.handleChange} />
<input type="email" placeholder="Імейл" name='email' required onChange={this.handleChange} />
<input type="text" placeholder="Misto" name='city' required onChange={this.handleChange} />
<input type="text" placeholder="Адреса доставки" name='address' required onChange={this.handleChange} />
<input type="tel" name='phone' placeholder="Номер телефону" required onChange={this.handleChange} />
<textarea placeholder="Повідомлення" name='message' onChange={this.handleChange} />
<button >`aaa`</button>
</form> */}