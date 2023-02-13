import React from "react";
import Linkedin from "./linkedin-logo.png"
import Photo from "./profile-photo.jpg"
import Email from "./email-logo.png"


function Info(){
    return(
        <div className="info-container">
            <img src={Photo} alt="" className="my-image"/>
            <h2 className="name">Elisha Cornelius</h2>
            <h3 className="feild"><i>Frontend Developer</i></h3>
            <h6 className="company">Stark Industries</h6>
            <div id="socials">
                <a href="mailto:elishacornelius55@gmal.com">
                    <div className="e">
                    
                        <p className="email">
                            <img src={Email} alt="" className="email-icon"/>
                             Email
                        </p>
                    </div>
                </a>
                <a href="">
                    <div className="l">
                        <p className="linkedin">
                            <img src={Linkedin} alt="" className="linkedin-icon"/>
                            LinkedIn
                        </p>
                    </div>
                </a>
                
            </div>
        </div>
    )
}
export default Info;