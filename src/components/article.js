import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Article = ({ articleData }) => (
        <React.Fragment key={articleData.id}>
          <div class={`article-summary`}>
            <div class={`article-summary-row`}>
                <Image uri={articleData.coverimage.url} alt={articleData.title} height='150px' />
                <div style={{display: `inline-block`}}>
                  <Link to={'/article/'+articleData.slug}>
                    <h2>{articleData.title}</h2>
                    <p>{articleData.summary}</p>
                  </Link>
                </div>
            </div>
            <div style={{display: `block`}}>
              <p style={{fontWeight: 'bold'}}>タグ</p>
              <p>
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
