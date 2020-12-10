import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from '../App.jsx'
import About from '../Components/About'
import Main_comp from '../Components/Main_Comp'


class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/about' component={About}/>
                <Route exact path='/' component={Home}/>
                <Route exact path='/post' component={Main_comp}/>

            </Router>
        )
    }
}

export default AppRouter;