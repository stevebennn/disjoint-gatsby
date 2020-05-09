const path = require('path')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pages = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            id
            shopifyId
            handle
            description
            images {
              originalSrc
            }
          }
        }
      }
    }
  `)

  pages.data.allShopifyProduct.edges.forEach(edge => {
    createPage({
      path: `/products/${edge.node.handle}`,
      component: path.resolve('./src/templates/ProductPageTemplate.js'),
      context: {
        id: edge.node.shopifyId,
        handle: edge.node.handle,
      },
    })
  })
}
