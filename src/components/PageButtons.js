import {useState} from "react"

const PageButtons = ({page, setPage}) => {
    return (
        <div className="buttonContainer">
            <button 
                onClick={() => setPage(prev => prev - 1)}
                disabled={page <= 1}
            >-</button>
            <p>{page}</p>
            <button 
                onClick={() => setPage(prev => prev + 1)}
            >+</button>
        </div>
    )
}

export default PageButtons