import React from 'react';

import LogIn from "../LogIn/log_in.component"
import CreateNewProjectForm from "../Projects/CreateProject/create-form.component"

// for now, go directly to login

const Home = () => {
    return (
        <div>
           <LogIn /> 
           <CreateNewProjectForm />
        </div>
        
    )
}

export default Home