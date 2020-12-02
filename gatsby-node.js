const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query getGalleryImages {
      images: allContentfulGallery {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.images.nodes.forEach(image => {
    createPage({
      path: `/gallery/${image.slug}`,
      component: path.resolve(`src/templates/GalleryTemplate.js`),
      context: {
        slug: image.slug,
      },
    })
  })
}
