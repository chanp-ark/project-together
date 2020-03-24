import React from 'react'

import "./multistep-form.styles.css"

const MultiStepForm = () => {
    
    const initialState = {
        projectName: '',
        techStack: '',
        description: '',
        maxCap: '',
        trackStep: 0,
        trackPrev: 0,
        trackNext: 0
    }

    const [ project, setProject ] = React.useState(initialState)
    
    const {projectName, techStack, description, maxCap, trackStep, trackPrev, trackNext} = project
    
    const handleChange = e => {
        e.preventDefault()
        console.log(e.target.value)
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        console.log(project)
        // update db
        setProject({
            projectName: '',
            techStack: '',
            description: '',
            maxCap: '',
            trackStep: 0,
            trackPrev: 0,
            trackNext: 0
        })
    }
    
    const fields = [
        <div className="tab" key="projectName">
            <label className="tab-label">Project Name</label>
            <input 
                type="text"
                name="projectName"
                value={projectName}
                onChange={handleChange}
                placeholder="name of project"
                required
            />
        </div>
        ,
        <div className="tab" key="techStack">
            <label className="tab-label">Tech Stack</label>
            <input 
                type="text"
                name="techStack"
                value={techStack}
                onChange={handleChange}
                placeholder="tech stack"
                required
            />
        </div>
        ,
        <div className="tab" key="project-description">
            <label className="tab-label">Description</label>
            <input 
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="brief description of your project"
                required
            />
        </div>
        ,
        <div className="tab" key="maxCap">
            <label className="tab-label">Max Number of Collaborators</label>
            <select id="maxCap" name="maxCap" onChange={handleChange}required>
                <option value="0">Any</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
        </div>
    ]
    
   

    
    return (
        <form className="multi-container" onSubmit={handleSubmit}>
            
            <div className="multi-subcontainer">
                 
                <div className="multi-tracker">
                    <span className="step-active"></span>
                    <span className="line"></span>
                    <span className="step"></span>
                    <span className="line"></span>
                    <span className="step"></span>
                    <span className="line"></span>
                    <span className="step"></span>
                </div>
                
                {
                   fields.filter( (curTab, i) => i === project.trackStep)
                }
                
                <div className="prevNext-container">
                    
                    {
                        (trackPrev <= fields.length && trackPrev > 0) &&
                            <button 
                                className="prevNext" 
                                value={trackPrev}
                                key="prevButton"
                                onClick={ e => {
                                    e.preventDefault();
                                    if (trackStep <= fields.length && trackStep > 0) {
                                        setProject({
                                            ...project,
                                            trackStep: project.trackStep -= 1,
                                            trackNext: project.trackNext -= 1,
                                            trackPrev: project.trackPrev -= 1,
                                        })
                                        console.log(project)
                                }}}>
                                    Prev
                            </button>
                    }
                    
                    {
                        trackNext < fields.length && 
                            <button 
                                className="prevNext"
                                key="nextButton"
                                value={trackStep}
                                onClick={ e => {
                                    e.preventDefault();
                                    if (trackStep < fields.length) {
                                        setProject({
                                            ...project,
                                            trackStep: project.trackStep += 1,
                                            trackNext: project.trackNext +=1,
                                            trackPrev: project.trackPrev +=1,
                                        
                                        })
                                        console.log(project)
                                    }
                                }}>
                                    Next
                            </button>
                    }
                </div>
                
                {
                    trackStep === fields.length &&
                        <input
                            className="multi-submit" 
                            type="submit"
                        />
                }
                
                
               
                
            </div>
            
        </form>
    )
}

export default MultiStepForm