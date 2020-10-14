import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>おかけになったURIは、現在使われておりません。</p>
  </Layout>
)

export default NotFoundPage
