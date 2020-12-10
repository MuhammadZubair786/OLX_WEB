import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch,Link } from 'react-router-dom';

import Sale from './Components/Post'
import Test from './Components/test'



class About extends React.Component{
    constructor(){
        super()
       
      
    }
    
    
    myfun =()=>{
      
        this.props.history.push('/')
      
    }
    render(){
        console.log(this.props)
        return(
            <div>
               <Sale history={this.props.history}/>
               {/* <Test/> */}
               
               
                
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    name:state.name
})


export default connect(mapStateToProps,null) (About);