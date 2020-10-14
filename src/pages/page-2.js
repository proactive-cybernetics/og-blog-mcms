import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="ぺーじ とぅー" />
    <h1>第2のページ</h1>
    <p>工事中です..</p>
    <Link to="/">トップページに戻る</Link>
  </Layout>
)

export default SecondPage
