import React from "react";
import "./style.css";

function Header(props) {
    return <div className="header"> <h1><strong>Samurai Champloo Clicky Game!</strong></h1>
    <h3>Click on a character but don't click on the same one twice!</h3>
    <h4><strong>Score: {props.score} | Top Score: {props.topScore}</strong></h4>
    </div>
}
export default Header;