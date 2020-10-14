import PropTypes from "prop-types"
import React from "react"

const TOC = ({toc}) => {
    return (
        <div class='toc'>
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
    );
}

export default TOC;