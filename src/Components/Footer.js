import React from 'react'
import '../App.css';


class Footer extends React.Component{
    render()
    {
        return(
            <div className='container-fluid' style={{backgroundColor:'#0E6655',color:'white'}}>

                <div className='row' >
                    <div className='col col-lg-4 text-center'>
                    <b>Other Countries</b>
                    &nbsp; &nbsp;
                        <a href='#' style={{textDecoration:'none',color:'white'}}>India</a>-
                        <a href='#' style={{textDecoration:'none',color:'white'}}> South Africa</a>-
                        <a href='#' style={{textDecoration:'none',color:'white'}}>Indonesia</a>

                    </div>
                    <div className='col col-lg-4'></div>

                    <div className='col col-lg-4 text-center' style={{ align:"right "}}>
                    <b>Free Classifieds in Pakistan. © 2006-2020 OLX</b>

                    </div>
                   
                </div>

            </div>
        )
    }
}

export default Footer