import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "./client/HomePage/home";
import SignUp from "./client/SignUp/sign_up.component";
import LogIn from "./client/LogIn/log_in.component"
import About from "./client/About/about";
import Projects from "./client/Projects/projects"
import MultiStepForm from './client/Projects/CreateProject/multistep-form.component';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/projects/new' component={MultiStepForm} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/login' component={LogIn} />
            </Switch>
        </main>
    )
}


export default Main