import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import SEO from "../components/seo"
import Layout from "../components/layout"

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
}
`;


const Homepage = () => {
  const data = useStaticQuery(query)
  console.log(data)


  return (
    <Layout>
      <SEO title="Home" />
      <Img fluid={data.hp.banner.childImageSharp.fluid} />

    </Layout>)
}

export default Homepage
