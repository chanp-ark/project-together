import React from 'react'

const Thumbnail = ( {name, tech_stack, curCap, maxCap} ) => {
    return (
        <div className="thumbnail-container">
            <div className="thumbnail-project">
                <h2>{name}</h2>
                <h3>Tech Stack: {tech_stack}</h3>
                <p>Current Number of Collaborators: {curCap}</p>
                <p>Maximum Capacity: {maxCap} </p>
                <br />
            </div>
        </div>
    )
}

export default Thumbnail

