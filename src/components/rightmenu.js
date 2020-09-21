import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const RightMenu = () => {
  const data = useStaticQuery(graphql`
    query SiteDataQuery {
      allMicrocmsLinks {
        edges {
          node {
            id
            name
            uri
          }
        }
      }
      allMicrocmsPages {
        edges {
          node {
            id
            slug
            title
          }
        }
      }
    }
  `)    
  return (
    <div id="div-menu">
      <h2>固定ページ</h2>
      {data.allMicrocmsPages.edges.map(edge => {
        return (<li><a href={'/page/'+edge.node.slug}>{edge.node.title}</a></li>)
      })}
      <h2>リンク</h2>
      {data.allMicrocmsLinks.edges.map(edge => {
        return (<li><a href={edge.node.uri} target="_blank">{edge.node.name}</a></li>)
      })}
    </div>
  )
}


RightMenu.propTypes = {
}

export default RightMenu
