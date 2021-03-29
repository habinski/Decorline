import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRows from '../components/CardRows/CardRows'
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <CardRows title='Можливо вас зацікавлять' />
  </Layout>
)

export default NotFoundPage
