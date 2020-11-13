import React from 'react'
import Image from '../Img/olx.PNG'



class Slider extends React.Component{
    render(){
        return(
            <div className="container-fluid" >
            <div className="row">
              <div className=""  >
              <img src={Image} width='100%'/>
              </div>
            </div>
          </div>
        )
    }
}

export default Slider;