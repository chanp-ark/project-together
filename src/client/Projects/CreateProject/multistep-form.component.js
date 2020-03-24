import React from 'react'

import "./multistep-form.styles.css"

const MultiStepForm = () => {
    
    const initialState = {
        projectName: '',
        techStack: '',
        description: '',
        maxCap: ''        
    }

    const [ project, setProject ] = React.useState(initialState)
    
    const {projectName, techStack, description, maxCap} = project
    
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
            
        })
    }
    
    // current tab starting as the initial tab

    const [currentTab, setCurrentTab] = React.useState('show-tab-1')
    
    // display current tab
    
    // create function 'showTab' that will displayed the specified tab 
        // grab class
        
    // don't need validations because of "required"
    
    
    const prevNext = () => {
        console.log(document.getElementsByClassName("tab"))
    }
    
    return (
        <form className="multi-container" onSubmit={handleSubmit}>
            
            <div className="multi-subcontainer">
                
                
                <div className="tab">
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
                
                <div className="tab">
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
                
                <div className="tab">
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
                
                <div className="tab">
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
                
                <div className="prevNext">
                    <button 
                        id="prevBtn" 
                        onClick={e => {
                            e.preventDefault();
                            prevNext()
                            }
                        }>
                            Prev
                        </button>
                    <button 
                        id="nextBtn" 
                        onClick={e => {
                            e.preventDefault();
                            prevNext()
                            }
                        }>
                            Next
                        </button>
                </div>
                
                <div className="multi-tracker">
                    <span className="step"></span>
                    <span className="line"></span>
                    <span className="step"></span>
                    <span className="line"></span>
                    <span className="step"></span>
                    <span className="line"></span>
                    <span className="step"></span>
                </div>
                
                <input
                    className="multi-submit" 
                    type="submit"
                />
            </div>
            
        </form>
    )
}

export default MultiStepForm