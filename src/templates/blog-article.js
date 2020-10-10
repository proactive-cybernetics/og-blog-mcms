import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RightMenu from "../components/rightmenu"
import Sharebutton from "../components/sharebuttons"

export default function BlogArticle({data}) {
    const article = data.microcmsArticles;

    const cheerio = require('cheerio');
    const $ = cheerio.load(article.body);
    const headings = $('h1, h2, h3').toArray();
    const toc = headings.map(data => ({
      text: data.children[0].data,
      id: data.attribs.id,
      name: data.name
    }));
    return (
        <Layout>
            <SEO title={article.title} description={article.summary} />
            <div id="article-body" style={{width: `60%`, float: `left`}}>
              <h1>{article.title}</h1>
                <a name="top"></a>
                <p><span>タグ :  
                  {article.tags.map(edge => {
                      return (<a href={`/tag/${edge.slug}`}>{edge.name}{` `}</a>)
                  })}
                </span>{`  `}<span style={{textAlign: `right`}}>{article.publishedAt} by {article.writer}</span></p>
                <div id="toc">
                  <p><strong>目次</strong></p>
                  {toc.map(toc_elem =>{ 
                    switch(toc_elem.name) {
                      case 'h1':
                        return ``
                      case 'h2':
                        return <p style={{fontSize:`0.9em`}}><a href={`#` + toc_elem.id}>{toc_elem.text}</a></p>
                      case 'h3':
                        return <p style={{fontSize:`0.8em`, paddingLeft:`20px`}}><a href={`#` + toc_elem.id}>{toc_elem.text}</a></p>
                      default:
                        return ``
                    }
                   })}
                </div>
                <div id="article-body" dangerouslySetInnerHTML={{ __html: article.body }}></div>
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
