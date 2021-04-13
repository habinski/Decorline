import React from 'react'
import { graphql } from "gatsby"
// import { GatsbyImage } from 'gatsby-plugin-image'
import ImageGallery from 'react-image-gallery';
import SEO from "../components/seo"
import Layout from "../components/layout"
import CardRow from '../components/cardRow/cardRow'
import BuyButton from '../components/buyButton/buyButton'
import {
	galleryBlock, mainInfo, mainInfo__items, infoBlock, infoSection, mainProduct, tdArgument, tdValue, fullInfo, priceP, descriptionDiv
} from "../styles/product.module.scss"

import { useCart } from 'react-use-cart'

const Product = ({ pageContext, data }) => {

	const { addItem, items, removeItem } = useCart()
	console.log('items:')
	console.log(items)
	const { title, galleryCover, galleryImages, information, description, price } = pageContext.product.node
	let gallery = [
		{
			original: galleryCover.childImageSharp.original.src,
			thumbnail: galleryCover.childImageSharp.resize.src
		}]

	galleryImages.map(image => {
		gallery.push({
			original: image.image.childImageSharp.original.src,
			thumbnail: image.image.childImageSharp.resize.src
		})
	})
	return (
		<Layout>
			<SEO title={title} />

			<section className={mainProduct}>
				<div className={infoSection}>
					<div className={galleryBlock}>
						<ImageGallery showBullets={true} items={gallery} showPlayButton={false} />
					</div>
					<div className={mainInfo}>
						<div className={mainInfo__items}>
							<h1>{title}</h1>
							<p className={priceP}>{`${price}₴`} <span>| метр погонний</span></p>
							<BuyButton title={true} product={pageContext.product.node} />
						</div>
					</div>
				</div>
				<div className={fullInfo}>
					<div className={infoBlock}>
						<h5>Інформація</h5>
						<table>
							<tbody>
								{information.map(i => {
									return (
										<tr>
											<td className={tdArgument}>
												{i.argument}
											</td>
											<td className={tdValue}>
												{i.value}
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
					<div className={descriptionDiv}>
						<h5></h5>
						<p>{description}</p></div>
				</div>
			</section>
			<CardRow title='Більше товарів з категорії' category="ЛДСП" slug={pageContext.slug} data={data.moreProducts} />
			<CardRow title="Пов'язані " category="послуги" slug='poslugi' data={data.poslugi} />
		</Layout>
	)
}

export default Product


export const query = graphql`
query ($slug: String) {
	moreProducts: allStrapiProduct(
	  filter: {category: {slug: {eq: $slug}}}
	  limit: 15
	  sort: {order: DESC, fields: published_at}
	) {
	  edges {
		node {
		  ...cardRow
		}
	  }
	}
	poslugi: allStrapiProduct(
	  filter: {category: {slug: {eq: "poslugi"}}}
	  limit: 15
	  sort: {order: DESC, fields: published_at}
	) {
	  edges {
		node {
		  ...cardRow
		}
	  }
	}
  }
  
  fragment cardRow on StrapiProduct {
	category {
	  category
	  id
	  slug
	}
	strapiId
	slug
	price
	id
	title
	cover {
	  childImageSharp {
		gatsbyImageData(layout: CONSTRAINED, height: 1920)
		id
	  }
	}
  }
  
`

