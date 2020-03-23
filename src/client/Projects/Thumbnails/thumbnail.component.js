import React from 'react'

import "./thumbnail.styles.css"

const Thumbnail = ( {name, tech_stack, curCap, maxCap} ) => {
    return (
        <div className="thmnl-container">
            <div className="thmnl-project">
                <div className="thmnl-name">{name}</div>
                <div className="thmnl-title">Tech Stack</div>
                    <p>{tech_stack}</p>
                <div className="thmnl-title">Current Number of Collaborators</div>
                    <p>{curCap}</p>
                <div className="thmnl-title">Maximum Capacity</div>
                    <p>{maxCap}</p>
            </div>
        </div>
    )
}

export default Thumbnail

