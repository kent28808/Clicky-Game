import React from "react"
import Card from "./Card"
const cards = [
    {
        image: "",
        title: "title1",
        body: "body1"
    },
    {
        image: "",
        title: "title2",
        body: "body2"
    },
    {
        image: "",
        title: "title3",
        body: "body3"
    },
]

const Container = () => {
    return (
        <div className="container">
            {cards.map((card, i)=>(
                <Card
                key={i}
                image={card.image}
                title={card.title}
                body={card.body}
            />
            ))}
        </div>
    )
}
export default Container