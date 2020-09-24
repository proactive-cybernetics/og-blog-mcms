import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/article"
import RightMenu from "../components/rightmenu"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>最新記事</h1>
    <div id="div-articles" style={{width: `65%`, float: `left`}}>
      {data.allMicrocmsArticles.edges.map(edge => {
        return (<Article articleData={edge.node} />)
      })}
    </div>
    <RightMenu />
  </Layout>
)

export const query = graphql`
  {
    allMicrocmsArticles(
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          id
          slug
          title
          tags {
            id
            name
          }
          coverimage {
            url
          }
          summary
          body
          tags {
            id
            slug
            name
          }
        }
      }
    }
  }
`

export default IndexPage