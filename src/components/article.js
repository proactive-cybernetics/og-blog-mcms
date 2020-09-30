import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Article = ({ articleData }) => (
        <React.Fragment key={articleData.id}>
          <div class={`article-summary`}>
            <div class={`article-summary-row`}>
              <div style={{display: `inline-block`}}>
              <h2><Link to={'/article/'+articleData.slug}>{articleData.title}</Link></h2>
              <p>{articleData.summary}</p>
              </div>
            </div>
            <div style={{display: `block`}}>
              <p><span style={{fontWeight: 'bold'}}>タグ</span>{` `}
                {articleData.tags.map(tag => (
                  <React.Fragment key={tag.id}>
                    <a href={"/tag/"+tag.slug}>{tag.name}</a>{`  `}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </React.Fragment>
)

Article.propTypes = {
    articleData: PropTypes.node.isRequired,
}

export default Article
