import { useState } from "react"

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(9);
    return (
        <div className="user-card">
            <h1>count:{count}</h1>
            <h1>count:{count2}</h1>
            <h2>Name:{props.name} </h2>
            <h3>Location: {props.Location}</h3>
            <h4>Contact: @ramyaSIyengar</h4>
        </div>
    )
}

export default User