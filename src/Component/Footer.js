import React from "react"
import Twitter from "./twitter-logo.png"
import Github from "./github-logo.png"
function Footer(){
    return(
        <div className="footer">
            <a href=""><img src={Twitter} alt="" className="twitter-icon"/></a>
            <a href=""><img src={Github} alt="" className="twitter-icon"/></a>
        </div>
    )
}
export default Footer;