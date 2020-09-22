const path = require(`path`)
const { createFilePath } = require (`gatsby-source-filesystem`)
const { paginate } = require("gatsby-awesome-pagination")

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === `microcmsArticles`) {
        const slug = createFilePath( {node, getNode, basePath: `articles`})
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions
    const result = await graphql(`
    query {
        allMicrocmsArticles {
            edges {
                node {
                    slug
                }
            }
        }
        allMicrocmsPages {
            edges {
                node {
                    slug
                }
            }
        }
        allMicrocmsTags {
            edges {
                node {
                    slug
                }
            }
        }
    }`)

    const articles = result.data.allMicrocmsArticles.edges
    const postsPerPage = 10
    const numPages = Math.ceil((articles.length / postsPerPage))
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i===0 ? `/` : `/${i + 1}`,
            component: path.resolve("./src/templates/index.js"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1
            }
        })
    })
    result.data.allMicrocmsArticles.edges.forEach(({node}) =>
        createPage({
            path: '/article/' + node.slug,
            component: path.resolve(`./src/templates/blog-article.js`),
            context: {
                slug: node.slug,
            },
        })
    )
    result.data.allMicrocmsPages.edges.forEach(({node}) =>
        createPage({
            path: '/page/' + node.slug,
            component: path.resolve(`./src/templates/static-page.js`),
            context: {
                slug: node.slug,
            },
        })
    )
    result.data.allMicrocmsTags.edges.forEach(({node}) =>
        createPage({
            path: '/tag/' + node.slug,
            component: path.resolve(`./src/templates/tag-index.js`),
            context: {
                slug: node.slug,
            },
        })
    )
}
