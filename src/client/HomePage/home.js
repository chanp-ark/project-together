import React from 'react';

import LogIn from "../LogIn/log_in.component"
import MultiStepForm from '../Projects/CreateProject/multistep-form.component';

// for now, go directly to login

const Home = () => {
    return (
        <div>
           <LogIn /> 
           <MultiStepForm />
        </div>
        
    )
}

export default Home