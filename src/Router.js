import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "./client/HomePage/home";
import SignUp from "./client/SignUp/sign_up.component";
import LogIn from "./client/LogIn/log_in.component"
import About from "./client/About/about";
import Projects from "./client/Projects/projects"
import CreateNewProjectForm from "./client/Projects/CreateProject/create-form.component"

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/projects' component={Projects} />
                <Route path='/projects/new' component={CreateNewProjectForm} />
                <Route path='/signup' component={SignUp} />
                <Route path='/login' component={LogIn} />
            </Switch>
        </main>
    )
}


export default Main