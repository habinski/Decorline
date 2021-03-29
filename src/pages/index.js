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
}
`;


const Homepage = () => {
  const data = useStaticQuery(query)
  // console.log(data.hp.about)


  return (
    <Layout>
      <SEO title="Home" />
      <GatsbyImage image={data.hp.banner.childImageSharp.gatsbyImageData} style={{ minHeight: `400px` }} />
      <CardRows title='Ознайомтеся з пропоцизіями в категорії ' />
      <Rewiews reviews={data.hp.reviews} />
      <About about={data.hp.about} />
    </Layout>)
}

export default Homepage

/*

todo:

// 1. Aдаптація під телефони для банера
2. Розміри шрифтів та типографіка
3. Розміри карточок товарів та кнопки покупки
4. Кнопка покупки з сторінки продукту
// 5. Стилізаціяя <About/>
6. Стилі та розміри кнопок в Heder
7. Центровка в Footer
8. Стрілочка "Усі" в CardRow
// 9. Сторінки для "Про Decorline", "Як ми працюємо", "Доставка" та їх розділи в Страпі
10. Сторінка та фільтри в категоріях
11. Логіка магазина
12. Sidemenu для кошика
13. Сторінка замовлення та пуш в адмінку
14. shortcuts
15. фавікони
*/