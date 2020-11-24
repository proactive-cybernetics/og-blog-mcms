import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/article"
import RightMenu from "../components/rightmenu"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div id="div-articles" style={{width: `65%`, float: `left`}}>
      <h1>最新記事</h1>
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
          publishedAt(formatString: "YYYY年M月D日")
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
