import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import SEO from "../components/seo"
import Layout from "../components/layout"

import CardRow from '../components/homepage/cardRow/cardRow'
import Rewiews from '../components/homepage/reviews/reviews'

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
    about {
      about
      image {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
    }
    reviews {
      review
      stars
      work
      name
      id
      photo {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  ldsp: allStrapiProduct(limit: 10, sort: {order: DESC, fields: published_at}, filter: {category: {category: {}, slug: {eq: "ldsp"}}}) {
    edges {
      node {
        ...productsFields
      }
    }
  }
}

fragment productsFields on StrapiProduct {
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
      fixed(width: 500) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}

`;


const Homepage = () => {
  const data = useStaticQuery(query)
  console.log(data.hp.reviews)


  return (
    <Layout>
      <SEO title="Home" />
      <Img fluid={data.hp.banner.childImageSharp.fluid} />
      <CardRow cards={data.ldsp.edges} name="ЛДСП" slug='ldsp' />
      <Rewiews reviews={data.hp.reviews} />
    </Layout>)
}

export default Homepage
