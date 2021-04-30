import React from "react"
import { useCart } from 'react-use-cart'
import Layout from "../components/layout"
import SEO from "../components/seo"

import OrderForm from '../components/OrderForm/OrderForm'

import CartItem from "../components/miniCard/miniCard"

import {
	main,
	sections,
	rightSection,
	leftSection,
	orderInfo,
} from "../styles/order.module.scss"

const OrderPage = () => {
	const { totalUniqueItems, items, cartTotal } = useCart()
	return (
		<Layout>
			<SEO title='Корзина' />
			<main className={main}>
				<h1>Замолвення</h1>
				<div className={leftSection}>
					<div>
						<h5>Як замовити</h5>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam itaque, quia ipsum quam nesciunt minus, laborum, asperiores esse expedita dolores ratione veniam? Facilis animi reprehenderit amet expedita laboriosam. Nihil, a.</p>
					</div>
					<form action="post">

					</form>
				</div>
				<div className={sections}>
					<div className={rightSection}>
						<h5>Ваше замолвення:</h5>
						{
							items.map(item => {
								return (
									<CartItem key={item.id} product={item} />
								)
							})
						}
						<div className={orderInfo}>
							<OrderForm />
						</div>
					</div>

				</div>
			</main>
		</Layout>
	)

}

export default OrderPage