import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RightMenu from "../components/rightmenu"
import Sharebutton from "../components/sharebuttons"

export default function BlogArticle({data}) {
    const article = data.microcmsArticles
    return (
        <Layout>
            <SEO title={article.title} description={article.summary} />
            <div style={{width: `60%`, float: `left`}}>
                <h1>{article.title}</h1>
                <p style={{textAlign: "right"}}>{article.publishedAt} by {article.writer}</p>
                <div dangerouslySetInnerHTML={{ __html: article.body }}></div>
                <Sharebutton slug={article.slug} title={article.title} />
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
        slug
        publishedAt(formatString: "YYYY年M月D日")
        writer
      }
    }
`
