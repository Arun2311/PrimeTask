import React from "react";
import pine from "../../assets/pine.png"
import "./ContentComp.css"

export default function ContentComp(){
    return(
    
        <div className="content">
            <div className="content-we">
                <h1>We are</h1>
            </div>
            <div className="pine">
                <img src={pine} alt="pine" />
            </div>
            <div className="content-base">
               <div> <h1>Scientifically proven</h1></div>
               <div> <h1>Evidence based</h1></div>
               <div> <h1>Result oriented</h1></div>
            </div>

        </div>
    )
}