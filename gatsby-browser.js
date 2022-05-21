/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.toggle_bottom_toc = () => {
    if (document.getElementById("bottom-toc").style.visibility=='visible') {
        document.getElementById("bottom-toc").style.visibility='hidden';
        document.getElementById("index-btn").style.background='cyan';
    }
    else {
        document.getElementById("bottom-toc").style.visibility='visible';
        document.getElementById("index-btn").style.background='darkblue';
    }
}

