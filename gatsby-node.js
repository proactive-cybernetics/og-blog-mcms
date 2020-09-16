const path = require(`path`)
const { createFilePath } = require (`gatsby-source-filesystem`)

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
    }`)

    result.data.allMicrocmsArticles.edges.forEach(({node}) =>
        createPage({
            path: node.slug,
            component: path.resolve(`./src/templates/blog-article.js`),
            context: {
                slug: node.slug,
            },
        })
    )
}
