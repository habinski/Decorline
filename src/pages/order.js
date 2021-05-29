import React from "react"
import { graphql } from "gatsby"
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

const OrderPage = ({ data }) => {

	const { totalUniqueItems, items, cartTotal } = useCart()
	return (
		<Layout>
			<SEO title='Корзина' />
			<main className={main}>
				<h1>Замолвення</h1>
				<div className={sections}>
					<div className={rightSection}>
						<div>
							<h3>Як замовити</h3>
							<p>{data.strapiOrderPage.order_text}</p>
						</div>
						<OrderForm />

					</div>

					<div className={leftSection}>
						<h3>Ваше замолвення:</h3>
						{
							items.map(item => {
								return (
									<CartItem key={item.id} product={item} />
								)
							})
						}
						<div className={orderInfo}>
							<p>Вартість замолвення: {cartTotal}₴</p>
							<p>Вартість доставки: {data.strapiOrderPage.order_price}₴</p>
							<hr />
							<p>Усього:<b> {data.strapiOrderPage.order_price + cartTotal}₴ </b></p>

						</div>
					</div>

				</div>
			</main>
		</Layout>
	)

}

export default OrderPage

export const query = graphql`
{
	strapiOrderPage {
	  order_price
	  order_text
	}
  }
  
  `
