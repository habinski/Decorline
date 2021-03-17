exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page }

    // Get the language code from the path, and match all paths
    // starting with this code (apart from other valid paths)
    // const langCode = page.path.split(`/`)[1]
    // page.matchPath = `/${langCode}/*`

    // Recreate the modified page
    deletePage(oldPage)
    createPage(page)
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `{
			products: allStrapiProduct(sort: {order: DESC, fields: published_at}) {
			  edges {
				node {
				  title
				  slug
				  strapiId
				  category {
					slug
				  }
				}
			  }
			}
		  }
		  `
  )

  if (result.errors) {
    throw result.errors
  }

  result.data.products.edges.forEach(product => {
    const id = product.node.strapiId
    console.log(id)
    createPage({
      path: `/${product.node.category.slug}/${product.node.slug}`,
      component: require.resolve("./src/templates/product.js"),
      context: {
        id: id,
      },
    })
  })

  // categories.forEach((category, index) => {
  // 	createPage({
  // 		// path: `/article/${article.node.title.replace(/ /g, "-")}`,
  // 		path: `/category/${category.node.category}`,
  // 		component: require.resolve("./src/templates/category.js"),
  // 		context: {
  // 			id: category.node.strapiId,
  // 		},
  // 	})
  // })
}


// categories: allStrapiCategory(sort: {order: DESC, fields: published_at}) {
// 	edges {
// 	  node {
// 		category
// 		strapiId
// 	  }
// 	}
//   }