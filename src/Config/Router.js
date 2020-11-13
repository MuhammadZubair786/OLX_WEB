import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from '../App.jsx'
import About from '../Components/About'


class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route path='/about' component={About}/>
                <Route exact path='/' component={Home}/>

            </Router>
        )
    }
}

export default AppRouter;