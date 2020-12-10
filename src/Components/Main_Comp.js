import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { GrFavorite, GrShareOption, GrPhone } from "react-icons/gr";
import Footer from './Footer'
import Company from './Company'

class Main_Comp extends React.Component {
    render() {
        console.log(this.props.data.User_Name)
        const data = this.props.data

        return (
            <div>
                <Navbar />
                <br />
                <Menu />
                <br />
                <br />
                <br />
                <div className='container'>
                    <div className='row' >
                        <div className='col col-lg-7' style={{ backgroundColor: 'black', textAlign: 'center', width: '20px' }} >
                            <img src={data.Image_Url} width='380px' height='400px' />
                        </div>


                        <div className='col col-lg-5'>
                            <div className="card" >
                                <div className="card-body">
                                    {/* <img className="card-img-top" src={data.Image_Url} alt="Card image cap" style={{ width: '250px', height: '150px' }} /> */}
                                    <h3 style={{ display: 'inline' }}>Rs {data.Item_Price}</h3>
                                    <GrFavorite style={{ float: 'right', fontSize: '20px', marginLeft: '20px' }} />

                                    <GrShareOption style={{ float: 'right', fontSize: '20px' }} />

                                    <h5>{data.Description}</h5>
                                    <br />  <br />
                                    <h6 style={{ display: 'inline' }}>{data.Location}</h6>
                                    <h6 style={{ float: 'right' }}>{data.DATE}</h6>


                                </div>

                            </div>

                            <br />
                            <div className="card" >
                                <div className="card-body">
                                    {/* <img className="card-img-top" src={data.Image_Url} alt="Card image cap" style={{ width: '250px', height: '150px' }} /> */}
                                    <h4 className='card-title'>Seller Description</h4>
                                    <img src={data.User_PhotoURL} style={{ border: '2px solid', borderRadius: '50px', width: '80px' }} />
                                    <p style={{ display: "inline" }}>&emsp;<b>{data.User_Name}</b></p>
                                    <br />  <br />
                                    <Button variant="contained" color="primary" style={{ display: 'block', width: '100%' }}>
                                        Chat With Seller
                                        </Button>
                                    {/* <h6 style={{display:'inline'}}>{data.Location}</h6>
                                    <h6 style={{float:'right'}}>{data.DATE}</h6> */}
                                    <br />
                                    <p style={{ display: 'block', textAlign: 'center' }}>

                                        <GrPhone style={{ fontSize: '25px', marginLeft: '20px' }} />
                                    &nbsp;&nbsp;{data.Contact}
                                    </p>


                                </div>

                            </div>
                        </div>



                    </div>




                </div>
                <br/>
                <div className='container'>
                    <div className='row' style={{ width: '100%' }}>
                        <div className='col col-lg-7'>
                            <div className='card'>
                                <div className='card-title'>
                                    <br />
                                    <h3 >&emsp;<u>Details</u></h3>
                                </div>

                                <div className='card-body'>

                                    <div className='row'>
                                        <div className='col col-lg-3'>
                                            <h5>Location</h5>
                                        </div>
                                        <div className='col col-lg-3'>
                                            <h5>{data.Location}</h5>
                                        </div>
                                        <div className='col col-lg-3'>
                                            <h5>Condition</h5>
                                        </div>
                                        <div className='col col-lg-3'>
                                            <h5>{data.Item_Condition}</h5>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='card-title'>
                                        <br />
                                        <h3 ><u>Description</u></h3>
                                    </div>
                                    <div className='card-body'>
                                        <h5>{data.Description}</h5>
                                       

                                    </div>


                                </div>
                            </div>



                        </div>

                    </div>

                   <br/>
                   <br/><br/>
                </div>
             
                <Company/>
                <Footer/>





            </div>
        )
    }


}



const mapStateToProps = (state) => ({
    data: state.card_data
})

export default connect(mapStateToProps, null)(Main_Comp)