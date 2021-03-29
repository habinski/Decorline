import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'

import SEO from "../components/seo"
import Layout from "../components/layout"

import CardRow from '../components/cardRow/cardRow'
import About from '../components/homepage/about/About'
import Rewiews from '../components/homepage/reviews/reviews'
import CardRows from '../components/CardRows/CardRows'

// import { toggleDarkMode } from '../state/app'



const Homepage = ({ data }) => {

  // console.log(data.hp.about)


  return (
    <Layout>
      <SEO title="Home" />
      <GatsbyImage image={data.hp.banner.childImageSharp.gatsbyImageData} style={{ minHeight: `400px` }} />
      {/* <CardRows title='Ознайомтеся з пропоцизіями в категорії ' /> */}
      <CardRow title='Ознайомтеся з пропоцизіями в категорії ' data={data.ldspRow} category="ЛДСП" slug='ldsp' />
      <CardRow title='Ознайомтеся з пропоцизіями в категорії ' data={data.mdfRow} category="МДФ" slug='mdf' />
      <CardRow title='Ознайомтеся з пропоцизіями в категорії ' data={data.poslugiRow} category="Послуг" slug='poslugi' />
      {/* <CardRow title='Ознайомтеся з пропоцизіями в категорії ' slug='ldsp' /> */}
      <Rewiews reviews={data.hp.reviews} />
      <About about={data.hp.about} />
    </Layout>)
}

export default Homepage


export const query = graphql`
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
  ldspRow: allStrapiProduct(
    limit: 10
    sort: {order: DESC, fields: published_at}
    filter: {category: {slug: {eq: "ldsp"}}}
  ) {
    edges {
      node {
        ...cardRow
      }
    }
  }
  mdfRow: allStrapiProduct(
    limit: 10
    sort: {order: DESC, fields: published_at}
    filter: {category: {slug: {eq: "mdf"}}}
  ) {
    edges {
      node {
        ...cardRow
      }
    }
  }
  poslugiRow: allStrapiProduct(
    limit: 10
    sort: {order: DESC, fields: published_at}
    filter: {category: {slug: {eq: "poslugi"}}}
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

`;

/*

todo:

// 1. Aдаптація під телефони для банера
2. Розміри шрифтів та типографіка
3. Розміри карточок товарів та кнопки покупки
4. Кнопка покупки з сторінки продукту
// 5. Стилізаціяя <About/>
6. Стилі та розміри кнопок в Header
7. Центровка в Footer
// 8. Стрілочка "Усі" в CardRow
// 9. Сторінки для "Про Decorline", "Як ми працюємо", "Доставка" та їх розділи в Страпі
10. Сторінка та фільтри в категоріях
11. Логіка магазина
12. Sidemenu для кошика
13. Сторінка замовлення та пуш в адмінку
14. shortcuts
// 15. фавікони
*/