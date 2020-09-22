import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RightMenu from "../components/rightmenu"

export default function StaticPage({data}) {
    const page = data.microcmsPages
    return (
        <Layout>
            <SEO title={page.title} description={page.title} />
            <div style={{width: `60%`, float: `left`}}>
                <h1>{page.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: page.body }}></div>
            </div>
            <RightMenu />
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
      microcmsPages(slug: {eq: $slug}) {
        title
        body
      }
    }
`
