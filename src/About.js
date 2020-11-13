import React from 'react'
import { Route, Switch,Link } from 'react-router-dom';
import Sale from './Components/Post'



class About extends React.Component{
    myfun =()=>{
        this.props.history.push('/')
    }
    render(){
        return(
            <div>
               <Sale/>
               
                
            </div>
        )
    }
}
export default About;