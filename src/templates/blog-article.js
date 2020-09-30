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
                <a name="top"></a>
                <h1>{article.title}</h1>
                <p><span>タグ :  
                  {article.tags.map(edge => {
                      return (<a href={`/tags/${edge.slug}`}>{edge.name}{` `}</a>)
                  })}
                </span>{`  `}<span style={{textAlign: `right`}}>{article.publishedAt} by {article.writer}</span></p>
                <div dangerouslySetInnerHTML={{ __html: article.body }}></div>
                <Sharebutton slug={article.slug} title={article.title} />
                <p style={{fontSize: `0.8rem`, paddingTop: `0.5rem`}}><a href="#top">↑先頭に戻る</a></p>
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
        tags {
          name
          slug
        }      
      }
    }
`
