import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRow from '../components/CardRow/CardRow'

import { notFound } from '../styles/notFoundPage.module.scss'

export const query = graphql`
{
  ldsp: allStrapiProduct(
    filter: {category: {slug: {eq: "ldsp"}}}
    limit: 15
    sort: {order: ASC, fields: published_at}
  ) {
    edges {
      node {
        ...cardRow
      }
    }
  }
  mdf: allStrapiProduct(
    filter: {category: {slug: {eq: "mdf"}}}
    limit: 15
    sort: {order: ASC, fields: published_at}
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
    sort: {order: ASC, fields: published_at}
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
const NotFoundPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className={notFound}>
        <h1>404</h1>
        <h2>Сторінку не знайдено</h2>
        <Link to='/'>Повернутися на головну сторінку</Link>
      </div>
      <CardRow title='Можливо вас зацікавить каталог ' category="ЛДСП?" slug="ldsp" data={data.ldsp} />
      <CardRow title="Або " category="МДФ?" slug='mdf' data={data.mdf} />
      <CardRow title="А можливо ви шукаєте наші " category="послуги?" slug='poslugi' data={data.poslugi} />
    </Layout>
  )
}

export default NotFoundPage
