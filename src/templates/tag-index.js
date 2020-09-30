import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RightMenu from "../components/rightmenu"
import Article from "../components/article"

export default function StaticPage({data}) {
    const tag = data.microcmsTags
    return (
        <Layout>
            <SEO title={tag.name} description={tag.name} />
            <div style={{width: `60%`, float: `left`}}>
                <h1>{"タグ: " + tag.name}</h1>
                {data.allMicrocmsArticles.edges.map(edge => {
                    return (<Article articleData={edge.node} />)
                })}
            </div>
            <RightMenu />
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
      microcmsTags(slug: {eq: $slug}) {
        slug
        name
      }
      allMicrocmsArticles(
        filter: {
          tags: {
            elemMatch: 
      	      {slug: {eq: $slug}}
          }
        }
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
            tags {
              id
              name
            }
          }
        }
      }
    }
`

