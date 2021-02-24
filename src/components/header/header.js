// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import React from "react"
// import s from './header.scss'


// const Header = ({ }) => (
//   <header>
//   </header>
// )

// export default Header

// import React from 'react';

// import { StaticQuery, graphql } from 'gatsby';

// const query = graphql`
//   query {
//     allStrapiCategories {
//       edges {
//         node {
//           strapiId
//           category
//         }
//       }
//     }
//   }
// `;

// const Header = () => (
//   <StaticQuery
//     query={query}
//     render={data => (
//       <ul>
//         {data.allStrapiCategories.edges.map(c => (
//           <li key={c.node.strapiId}>{c.node.category}</li>
//         ))}
//       </ul>
//     )}
//   />
// );

// export default Header;