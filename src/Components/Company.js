import React from 'react'
import { TiSocialFacebookCircular, TiSocialTwitterCircular } from "react-icons/ti";
import { CgYoutube } from "react-icons/cg";
import { SiInstagram } from "react-icons/si";
// import { AiFillApple } from "react-icons/ai";
import Apple from '../Img/Apple.PNG'
import GetImg from '../Img/Plays.PNG'


class Company extends React.Component {
    render() {
        return (
            <div>

                <div className='container-fluid' style={{ backgroundColor: '#F2F3F4 ', borderTop: '1px solid #D6DBDF' }}>

                    <div className='row'>
                        <div className='col col-lg-1'>


                        </div>
                        <div className='col col-lg-2' style={{ marginLeft: '-40px' }}>
                            <b>POPULAR CATEGORIES</b>

                            <ul style={{ listStyle: 'none', marginTop: '10px' }}>
                                <li>Cars</li>
                                <li>Flats for rent</li>
                                <li>Jobs</li>
                                <li>Mobile Phones</li>


                            </ul>

                        </div>
                        <div className='col col-lg-2 ' style={{ marginLeft: '20px' }}>
                            <b className='text-center'>TRENDING SEARCHES</b>

                            <ul style={{ listStyle: 'none', marginTop: '10px' }}>
                                <li>Bikes</li>
                                <li>Watches</li>
                                <li>Books</li>
                                <li>Dogs</li>


                            </ul>

                        </div>
                        <div className='col col-lg-2' style={{ marginLeft: '20px' }}>
                            <b className='text-center'>ABOUT US</b>

                            <ul style={{ listStyle: 'none', marginTop: '10px' }}>
                                <li>About OLX Group</li>
                                <li>OLX Blog</li>
                                <li>Contact Us</li>
                                <li>OLX For Bussiness</li>


                            </ul>


                        </div>
                        <div className='col col-lg-2'>
                            <b className='text-center'>OLX</b>

                            <ul style={{ listStyle: 'none', marginTop: '10px' }}>
                                <li>Help</li>
                                <li>Sitemap</li>
                                <li>Legal & Privacy Information</li>

                            </ul>

                        </div>
                        <div className='col col-lg-2'>
                            <b className='text-center'>FOLLOW US</b>
                            <br />
                            <a href='#'> <TiSocialFacebookCircular style={{ fontSize: '25px', color: '#566573' }} /></a>
                            <a href='#'> <TiSocialTwitterCircular style={{ fontSize: '25px', color: '#566573' }} /></a>
                            <a href='#'> <CgYoutube style={{ fontSize: '25px', color: '#566573' }} /></a>&nbsp;
                            <a href='#'> <SiInstagram style={{ fontSize: '20px', color: '#566573' }} /></a>



                            <br/>
                            <br/>
                            <br/>
                            

                            
                            <a href="#" target='_blanks'><img src={Apple} width='80px' style={{border:'0px solid',borderRadius:'5px'}}/></a>
                            &emsp;
                            <a href="#"><img src={GetImg} width='80px' style={{border:'0px solid',borderRadius:'5px'}}/></a>
                            
                            
                            
                            

                        


                        </div>

                       
                    </div>
                    
                    </div>



                </div>
           

        )
    }
}

export default Company;