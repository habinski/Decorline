import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'

import SEO from "../components/seo"
import Layout from "../components/layout"

import CardRow from '../components/homepage/cardRow/cardRow'
import About from '../components/homepage/about/About'
import Rewiews from '../components/homepage/reviews/reviews'

import { connect } from 'react-redux'
import { toggleDarkMode } from '../state/app'

const query = graphql`
{
  hp: strapiHomepage {
    banner {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 3.1)
      }
    }
    about {
      about
      image {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 720)
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
          gatsbyImageData(width: 140)
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
      gatsbyImageData(layout: CONSTRAINED, height: 1920)
      id
    }
  }
}

`;


const Homepage = ({ isDarkMode, dispatch }) => {
  const data = useStaticQuery(query)
  console.log(data.hp.about)


  return (
    <Layout>
      <SEO title="Home" />
      <button
        style={isDarkMode ? { background: 'black', color: `white` } : null}
        onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
      >add to cart</button>      <GatsbyImage image={data.hp.banner.childImageSharp.gatsbyImageData} />
      <CardRow cards={data.ldsp.edges} name="ЛДСП" slug='ldsp' />
      <Rewiews reviews={data.hp.reviews} />
      <About about={data.hp.about} />
    </Layout>)
}

// export default Homepage
export default connect(state => ({
  isDarkMode: state.app.isDarkMode
}), null)(Homepage)

