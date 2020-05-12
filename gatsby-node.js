const path = require('path')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const productPages = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            shopifyId
            handle
          }
        }
      }
    }
  `)

  productPages.data.allShopifyProduct.edges.forEach(edge => {
    createPage({
      path: `/products/${edge.node.handle}`,
      component: path.resolve('./src/templates/productPage.js'),
      context: {
        id: edge.node.shopifyId,
        handle: edge.node.handle,
      },
    })
  })
}
