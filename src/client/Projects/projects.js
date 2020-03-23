import React from 'react'

import Thumbnail from "./Thumbnails/thumbnail.component"
import CreateProject from "./CreateProject/create-button.component"
import "./project.css"

const Projects = () => {
    
    // make thumbnails of projects, 2 columns 
    // fill initialState with projects in database
    const initialState = [
        {
            name: "Project 1",
            tech_stack: "react node",
            curCap: 2,
            maxCap: 6,
            users: ["John", "Jane"]
        },
        {
            name: "Project 2",
            tech_stack: "angular express",
            curCap: 4,
            maxCap: 5,
            users: ["James", "Jo", "Joseph", "Jasmine"]
        },
        {
            name: "Project 3",
            tech_stack: "jQuery PHP",
            curCap: 1,
            maxCap: 3,
            users: ["Diane"]
        },
        {
            name: "Project 4",
            tech_stack: "react node",
            curCap: 2,
            maxCap: 4,
            users: ["Kenzie", "Kash"]
        }
    ]
    
    const [projects] = React.useState(initialState)
 
    return (
        <div className="project-container">
            <div className="project-title">Projects</div>
            <div className="projects">
                <CreateProject />
                {projects.map( (project, i) => {
                    const {name, tech_stack, curCap, maxCap} = project
                    return(
                        <Thumbnail
                            name={name}
                            key={i}
                            tech_stack={tech_stack}
                            curCap={curCap}
                            maxCap={maxCap}
                        />
                    )
                })} 
            </div>
        </div>
    )
}

export default Projects;