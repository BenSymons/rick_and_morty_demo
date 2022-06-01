import {useState} from "react"

const Card = ({character}) => {
    const {name, species, status, image} = character
    return (
        <div className="card">
            <img src={image}/>
            <div>
                <p><b>Name:</b> {name}</p>
                <p><b>Species:</b> {species}</p>
                <p><b>Status:</b> <span className={status.toLowerCase()}>{status}</span></p>
            </div>
        </div>
    )
}

export default Card