import React from 'react'
import {  AiOutlineDown } from "react-icons/ai";


class Menu extends React.Component{
    render(){
        return(
            <div className="container-fluid" >
            <div className="row">
              <div className="col-lg-2" style={{textAlign:"center"}}>
                <b>ALL CATEGORIES</b>
                <AiOutlineDown  style={{fontSize:'22px',fontWeight: 'bold' ,marginLeft:'10px' }} />
    
              </div>
    
              <div className="col-lg-6 link">
              <a href='#' style={{}}>Mobile Phone</a>
                <a href='#' style={{marginLeft:'20px',}}>Car</a>
                <a href='#' style={{marginLeft:'20px',}}>Motorcycles</a>
                <a href='#' style={{marginLeft:'20px',}}>Houses</a>
                <a href='#' style={{marginLeft:'20px',}}>TV - Video - Audio</a>
                <a href='#' style={{marginLeft:'20px',}}> Land & Plots</a>
    
               
    
              </div>
             
            </div>
          </div>
        )
    }
}

export default Menu;