import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const RightMenu = () => {
  const data = useStaticQuery(graphql`
    query SiteDataQuery {
      allMicrocmsArticles {
        group(field: tags___slug) {
          fieldValue
          totalCount
        }
      }    
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
      allMicrocmsTags {
        edges {
          node {
            id
            slug
            name
          }
        }
      }
    }
  `)
  const articles_group = data.allMicrocmsArticles.group
  const tags_edges = data.allMicrocmsTags.edges
  return (
    <div id="div-menu" style={{width: `30%`, float: `right`}}>
      <h3>タグ</h3>
      {articles_group.map(edge => {
        const tag_slug = edge.fieldValue
        const tag_name = tags_edges.find(element => { return(element.node.slug == tag_slug)}).node.name
        return (<li><a href={'/tag/' + tag_slug}>{tag_name}</a>{` `}({edge.totalCount})</li>)
      })}
      <h3>固定ページ</h3>
      {data.allMicrocmsPages.edges.map(edge => {
        return (<li><a href={'/page/'+edge.node.slug}>{edge.node.title}</a></li>)
      })}
      <h3>リンク</h3>
      {data.allMicrocmsLinks.edges.map(edge => {
        return (<li><a href={edge.node.uri} target="_blank">{edge.node.name}</a></li>)
      })}
    </div>
  )
}


RightMenu.propTypes = {
}

export default RightMenu
