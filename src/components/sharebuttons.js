import PropTypes from "prop-types"
import React from "react"
import { 
  FacebookShareButton, 
  FacebookIcon, 
  LineShareButton, 
  LineIcon,
  LinkedinShareButton, 
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share';



const Sharebutton = ({ title, slug }) => {
    const articleUrl = `http://proactive-cybernetics.netlify.app/articles/${slug}`
    return (
        <React.Fragment key={"share"}>
          <div style={{display: `inline-block`}}>

            <FacebookShareButton url={articleUrl}>
              <FacebookIcon size={30} round />
            </FacebookShareButton>
            {` `}
            <LineShareButton url={articleUrl} >
              <LineIcon size={30} round />
            </LineShareButton>
            {` `}
            <LinkedinShareButton url={articleUrl} >
              <LinkedinIcon title={title} size={30} round />
            </LinkedinShareButton>
            {` `}
            <TwitterShareButton title={title + " | Proactive Cybernetics"} url={articleUrl} >
              <TwitterIcon size={30} round />
            </TwitterShareButton>
          </div>
        </React.Fragment>
    )
}

Sharebutton.propTypes = {
    title: PropTypes.node.isRequired,
    slug: PropTypes.node.isRequired
}

export default Sharebutton
