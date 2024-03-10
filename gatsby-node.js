const path = require("path")

// blog
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const postTemplate = path.resolve("src/pages/article.js")

  return graphql(`
    query prismicArticles {
      allPrismicArticles {
        nodes {
          uid
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allPrismicArticles.nodes.forEach(blog => {
      createPage({ path: "/blog/" + blog.uid, component: postTemplate })
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (page.path === `/`) {
    page.matchPath = `/*`
    createPage(page)
  }
}
