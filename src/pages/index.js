import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>記事一覧</h1>
    {data.allMicrocmsArticles.edges.map(edge => {
      const article=edge.node
      return (
        <React.Fragment key={article.id}>
            <div style={{border:"solid", borderColor:"black", margin:"1rem"}}>
            <Link to={'/'+article.slug}>
              <h2>{article.title}</h2>
              <div>
                <p>{article.summary}</p>
              </div>
            </Link>
            <Image uri={article.coverimage.url} alt={article.title} height='200px' />
            <p style={{fontWeight: 'bold'}}>タグ</p>
            {article.tags.map(tag => (
              <React.Fragment key={tag.id}>
                <span> {tag.name} </span>
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
      )
    })}
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
            name
          }
        }
      }
    }
  }
`

export default IndexPage
