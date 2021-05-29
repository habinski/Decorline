import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { graphql, useStaticQuery } from 'gatsby'
import * as Yup from 'yup';
import axios from 'axios'
import { useCart } from 'react-use-cart'
import CompleteOrderIcon from '../../images/icons/CompleteOrder.svg'
import { formSection, btnDiv, errorField, mainForm, dataForOrder, fieldDiv, addressForDelivery, deliveryQ, form } from './OrderForm.module.scss'

const OrderSchema = Yup.object().shape({
	firstName: Yup.string().required().min(2),
	lastName: Yup.string().required().min(2),
	city: Yup.string(),
	address: Yup.string().min(2),
	email: Yup.string().email().required().min(2),
	phone: Yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/).required().min(10).max(13),
})

const OrderForm = () => {
	const [jwt, setJWT] = useState(null)
	const { items } = useCart()
	console.log(data.strapiOrderPage)
	const query = graphql`
{
	strapiOrderPage {
	  cities {
		  id
		  name
		 
	  }
	  order_options{
		name
		id
		address_required
	}
	}
  }
  `
	const data = useStaticQuery(query)

	const AddressForm = ({ errors, touched, show }) => {
		if (show) {
			return <div className={formSection}>
				<h3>Адреса доставки</h3>
				<div className={addressForDelivery}>
					<div className={fieldDiv}>
						<label htmlFor="city">Місто</label>
						<Field name="city" as="select">
							{
								data.strapiOrderPage.cities.map((city) => {
									return <option value={city.name} id={city.id}>
										{city.name}
									</option>
								})
							}
						</Field>
					</div>
					<div className={fieldDiv}>
						<label htmlFor="address">Адреса</label>
						<Field id="address" name="address" placeholder="Адреса" type="address" className={errors.address && touched.address ? errorField : null} />
					</div>
				</div>
			</div>
		}
		else return null
	}
	return (

		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				city: 'Чернівці',
				address: '',
				phone: '',
				message: '',
				deliveryOption: '1'

			}}
			validationSchema={OrderSchema}
			onSubmit={async (values) => {
				try {
					const { data } = await axios.post(`${process.env.GATSBY_API_URL}/auth/local`, {
						identifier: process.env.GATSBY_API_EMAIL,
						password: process.env.GATSBY_API_PASSWORD,
					})
					setJWT({
						jwt: data.jwt
					})
				}
				catch (error) {
					alert(error)
				}

				try {
					await axios.post(`${process.env.GATSBY_API_URL}/orders`, {
						headers: {
							Authorization: jwt.jwt
						},

						person: {
							name: values.firstName,
							surname: values.lastName,
							phone: values.phone,
							email: values.email,
						},
						city: values.city,
						address: values.address,
						message: values.message,
						products: items,
						order_option: data.strapiOrderPage.order_options[values.deliveryOption - 1].name

					})
					console.log('WOOOORK')
				}
				catch (error) {
					alert(error)
				};

			}}
		>
			{({ errors, touched, values }) => (
				<Form className={mainForm}>

					<div className={formSection}>
						<h3>Інформація для замовлення</h3>
						<div className={dataForOrder}>
							<div className={fieldDiv}>
								<label htmlFor="firstName">Ім'я</label>
								<Field id="firstName" name="firstName" placeholder="Іван" className={errors.firstName && touched.firstName ? errorField : null} />
							</div>

							<div className={fieldDiv}>
								<label htmlFor="lastName">Фамілія</label>
								<Field id="lastName" name="lastName" placeholder="Франко" className={errors.lastName && touched.lastName ? errorField : null} />
							</div>
							<div className={fieldDiv}>
								<label htmlFor="email">Імейл</label>
								<Field id="email" name="email" placeholder="example@decorline.ua" className={errors.email && touched.email ? errorField : null} />
							</div>

							<div className={fieldDiv}>
								<label htmlFor="phone">Номер телефону</label>
								<Field id="phone" name="phone" placeholder="+38 " type="phone" className={errors.phone && touched.phone ? errorField : null} />
							</div>
						</div>
					</div>

					<div className={formSection}>
						<h3>Спосіб доставки</h3>
						<div role="group" aria-labelledby="my-radio-group">
							{
								data.strapiOrderPage.order_options.map((op) => {
									return <label>
										<Field type="radio" name="deliveryOption" value={op.id.toString()} />{op.name}
									</label>
								})
							}
							<p>Picked: {values.deliveryOption}, aдреса потрібна: {data.strapiOrderPage.order_options[values.deliveryOption - 1].address_required.toString()} </p>
						</div>
					</div>
					<AddressForm errors touched show={data.strapiOrderPage.order_options[values.deliveryOption - 1].address_required} />



					<div className={formSection}>
						<h3>Повідомлення</h3>
						<div className={deliveryQ}>
							<label htmlFor="message">Побажання та вказівки до замовлення</label>
							<Field id="message" name="message" placeholder="Залиште побажання щодо замовлення" type="message" as="textarea" />
						</div>
					</div>

					<div className={formSection}>
						<div className={btnDiv}>
							<p>Натискаючи "Скласти замолвення" Ви погоджуєтесь з політикою конфіденційності та правилами користування</p>
							<button type="submit"> <CompleteOrderIcon /><span>Скласти замовлення</span></button>
						</div>
					</div>
				</Form>)}
		</Formik>
	);
}
export default OrderForm