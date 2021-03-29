import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRows from '../components/CardRows/CardRows'

import { notFound } from '../styles/notFoundPage.module.scss'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={notFound}>
      <h1>404</h1>
      <h2>Сторінку не знайдено</h2>
      <Link to='/'>Повернутися на головну сторінку</Link>
    </div>
    <CardRows title='Можливо вас зацікавлять' />
  </Layout>
)

export default NotFoundPage
