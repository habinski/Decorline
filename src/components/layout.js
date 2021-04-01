
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
//
// import { DebugCart } from 'use-shopping-cart'
//
import Header from "./header/header"
import Footer from "./footer/footer"

// import s from "./layout.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <DebugCart /> */}
      <Header />
      <main >{children}</main>
      <Footer />

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
