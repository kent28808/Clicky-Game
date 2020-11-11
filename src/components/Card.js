import React from "react"

const Card = (props) => {
    const {image, title, body} = props
    return (
    <div onClick={()=>{
        console.log(title)
    }} class="card" style={{width: "18rem"}}>
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{body}</p>
        </div>
    </div>)
}

export default Card