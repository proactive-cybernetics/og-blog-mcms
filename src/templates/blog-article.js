import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RightMenu from "../components/rightmenu"

export default function BlogArticle({data}) {
    const article = data.microcmsArticles
    return (
        <Layout>
            <SEO title={article.title} description={article.summary} />
            <div style={{width: `60%`, float: `left`}}>
                <h1>{article.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: article.body }}></div>
            </div>
            <RightMenu />
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
      microcmsArticles(slug: {eq: $slug}) {
        title
        body
      }
    }
`
