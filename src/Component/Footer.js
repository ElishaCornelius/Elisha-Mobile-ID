import React from "react"
import Twitter from "./twitter-logo.png"
import Github from "./github-logo.png"
function Footer(){
    return(
        <div className="footer">
            <a href="twitter.com/@changeastory"><img src={Twitter} alt="" className="twitter-icon"/></a>
            <a href="https://github.com/ElishaCornelius"><img src={Github} alt="" className="twitter-icon"/></a>
        </div>
    )
}
export default Footer;