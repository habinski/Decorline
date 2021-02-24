import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Decorline</h1>
    {/* <h1>{process.env.GATSBY_TEST_ENV}</h1> */}

  </Layout>
)

export default IndexPage
