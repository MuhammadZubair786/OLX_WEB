import React from 'react'
import Tryol  from '../Img/tryolx.PNG'
import Play from '../Img/Plays.PNG'
import Apple from '../Img/Apple.PNG'


class Tryolx extends React.Component{
    render(){
        return(
            <div className='container-fluid' style={{backgroundColor:'#F2F3F4'}}>
                <div className='row'>
                    <div className='col col-lg-5 text-center'>
                        
                        <img src={Tryol} style={{border:'none'}}/>

                    </div>
                    <div className='col col-lg-3'>
                        <br/>
                        <h2 style={{fontWeight:'bold'}}>TRY THE OLX APP</h2>
                        <p style={{fontSize:'20px'}}>Buy, sell and find just about anything using the app on your mobile</p>
                    </div>
                    
                    <div className='col col-lg-3' style={{borderLeft: '3px solid #D6DBDF',height: '150px',marginTop:'30px'}}>
                    &emsp;
                    
                    <h4>&emsp;&emsp;GET YOUR APP TODAY</h4>&emsp;&emsp;&emsp;
                   
                    <a href="#" target='_blanks'><img src={Apple} width='120px' style={{border:'0px solid',borderRadius:'5px'}}/></a>
                    <br/><br/>&emsp;&emsp;&emsp;
                    <a href="#"><img src={Play} width='120px' style={{border:'0px solid',borderRadius:'5px'}}/></a>

                    </div>
                    

                </div>
                
            </div>
        )
    }
}
export default Tryolx;