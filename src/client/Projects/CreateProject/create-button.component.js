import React from 'react'

import { Link } from "react-router-dom"

import "./create-button.styles.css"

const CreateProject = () => {
    
    const handleClick = e => {
        e.preventDefault()
        console.log(e.target)
    }
    
    return (
        <div className="button-container">
            <button
                className="button-submit"
                onClick={handleClick}
            >
            <Link to="/projects/new"> + CREATE NEW PROJECT</Link>
            </button>
        </div>
    )
}

export default CreateProject