import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import SEO from "../components/seo"
import Layout from "../components/layout"

import CardRow from '../components/homepage/cardRow'

// import PromotionsGallery from '../components/homepage/promotionsGallery'

const query = graphql`
{
  hp: strapiHomepage {
    banner {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
        id
      }
    }
  }
 products: allStrapiProduct(limit: 10) {
    edges {
      node {
        category{
          category
          id
          slug
        }
        strapiId
        slug
        price
        id
        title
        gallery {
          image {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        information {
          argument
          value
          id
        }
       bigCover: cover {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
       miniCover: cover {
          childImageSharp {
            fixed(width: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
}
`;


const Homepage = () => {
  const data = useStaticQuery(query)
  console.log(data.products.edges)


  return (
    <Layout>
      <SEO title="Home" />
      <Img fluid={data.hp.banner.childImageSharp.fluid} />
      <CardRow cards={data.products.edges} />
    </Layout>)
}

export default Homepage
