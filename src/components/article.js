import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Article = ({ articleData }) => (
        <React.Fragment key={articleData.id}>
            <div style={{border:"solid", borderColor:"black", margin:"1rem"}}>
            <Link to={'/article/'+articleData.slug}>
              <h2>{articleData.title}</h2>
              <div>
                <p>{articleData.summary}</p>
              </div>
            </Link>
            <Image uri={articleData.coverimage.url} alt={articleData.title} height='200px' />
            <p style={{fontWeight: 'bold'}}>タグ</p>
            {articleData.tags.map(tag => (
              <React.Fragment key={tag.id}>
                <span> {tag.name} </span>
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
)

Article.propTypes = {
    articleData: PropTypes.node.isRequired,
}

export default Article
