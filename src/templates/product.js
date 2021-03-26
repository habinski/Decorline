import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
// import { GatsbyImage } from 'gatsby-plugin-image'
import ImageGallery from 'react-image-gallery';
import SEO from "../components/seo"
import Layout from "../components/layout"
import CardRow from '../components/cardRow/cardRow'
import { galleryBlock, mainInfo, infoBlock, info, mainProduct, tdArgument, tdValue } from "../styles/product.module.scss"

const Product = ({ pageContext }, location) => {
	// const data = useStaticQuery(query)
	const { title, galleryCover, galleryImages, information, } = pageContext.product.node
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


	console.log(gallery)
	return (
		<Layout>
			<div className={mainProduct}>
				<h1>{title}</h1>
				<section className={mainInfo}>
					<div className={galleryBlock}>
						<ImageGallery showBullets={true} items={gallery} showPlayButton={false} useBrowserFullscreen={false} />
					</div>
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
				</section>
			</div>
			<CardRow title='Подібні товари в категорії' name="ЛДСП" slug='ldsp' />
		</Layout>
	)
}

export default Product