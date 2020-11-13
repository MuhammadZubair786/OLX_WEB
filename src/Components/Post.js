import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import './Post.css'
// import { GoDeviceMobile } from "react-icons/go";
// import  { GrFormNext } from "react-icons/gr";
import Button from '@material-ui/core/Button';


class Sell extends React.Component {
    render() {
        return (
            <div>
                <div className='container-fluid' style={{ backgroundColor: '#FAF8F8' }}>
                    <div className='row'>
                        <div className='col col-lg-1' >
                            <Link to='/'><IoMdArrowRoundBack style={{ float: 'right', fontSize: '30px' }} /></Link>

                        </div>
                        <div className='col col-lg-1'>
                            <a className="" rel="" data-aut-id="btnOlxLogo" href="/"><svg style={{ marginTop: '-7px' }} height="60px" viewBox="0 0 1024 1024" data-aut-id="icon" className=""><path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg></a>

                        </div>
                    </div>


                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col col-lg-12 text-center' >
                            <h1 style={{ fontWeight: 'bold' }}>POST YOUR AD</h1>

                        </div>
                    </div>

                </div>

                <div className='container' style={{ marginTop: '20px' }}>
                    <div className='row'>
                        <div className='col col-lg-12 text-center' >
                            <h3 style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>SELL ITEM FORM</h3>

                        </div>
                    </div>

                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col col-lg-1'>

                        </div>
                        <div className='col col-lg-10 ' >
                            <form style={{ backgroundColor: '#EEEBEA' }}>
                                <br />
                                <div className='row'>
                                    <div className='col col-lg-4' >
                                        <h4 style={{ marginLeft: '10px' }}>Item Name</h4>

                                    </div>

                                    <div className='col col-lg-8 ' >
                                        <input type='text' className='form-control' style={{ width: '90%' }} placeholder='Item Name'></input>

                                    </div>
                                </div>


                                <div className='row' style={{ marginTop: '10px' }}>
                                    <div className='col col-lg-4'  >
                                        <h4 style={{ marginLeft: '10px' }}>Item Cateorgy</h4>

                                    </div>

                                    <div className='col col-lg-8 ' >
                                        <select className='form-control' style={{ width: '90%' }}>
                                            <option>Select Cateorgy</option>
                                            <option>Mobile</option>
                                            <option>Vehicles</option>
                                            <option>Propert For Sale</option>
                                            <option>Propert For Rent</option>
                                            <option>Electronic & Home Appliance</option>
                                            <option>Bike</option>
                                            <option>Bussiness,Industrial & Agriculture</option>
                                            <option>Services</option>
                                            <option>Animals</option>
                                            <option>Furniture & Home Decor</option>
                                            <option>Fashion & Beauty</option>
                                            <option>Books ,Sport & Hobbies</option>
                                            <option>Kids</option>

                                        </select>

                                    </div>
                                </div>

                                <div className='row' style={{ marginTop: '10px' }}>
                                    <div className='col col-lg-4'  >
                                        <h4 style={{ marginLeft: '10px' }}>Item Price</h4>

                                    </div>

                                    <div className='col col-lg-8 ' >
                                        <input type='text' className='form-control' style={{ width: '90%' }} placeholder='Item Price in Rs'></input>

                                    </div>
                                </div>

                                <div className='row' style={{ marginTop: '10px' }}>
                                    <div className='col col-lg-4'  >
                                        <h4 style={{ marginLeft: '10px' }}>Item Image</h4                    >

                                    </div>

                                    <div className='col col-lg-8 ' >
                                        <buton ><input type='file' width='100%' accept="image/*"  ></input></buton>
                                       
     
      
     

                                    </div>
                                </div>


                                <div className='row' style={{ marginTop: '10px' }}>
                                    <div className='col col-lg-4'  >
                                        <h4 style={{ marginLeft: '10px' }}>Location</h4>

                                    </div>

                                    <div className='col col-lg-8 ' >
                                        <input type='text' className='form-control' style={{ width: '90%' }} placeholder='Where Located '></input>

                                    </div>
                                </div>


                                <div className='row' style={{ marginTop: '10px' }}>
                                    <div className='col col-lg-4'  >
                                        <h4 style={{ marginLeft: '10px' }}>Item Description</h4>

                                    </div>

                                    <div className='col col-lg-8 ' >
                                        <textarea type='' className='form-control' style={{ width: '90%' }} placeholder='Write Descriptipn About Item .... '></textarea>

                                    </div>
                                </div>

                                <div className='row' style={{ marginTop: '10px' }}>
                                    <div className='col col-lg-8'>

                                    </div>
                                    <div className='col col-lg-2' style={{ textAlign: 'right' }}>
                                        <Button variant="contained" color="secondary">
                                            Cancel
                                </Button>

                                    </div>
                                    <div className='col col-lg-2' style={{ textAlign: 'left' }} >
                                        <Button variant="contained" color="primary">
                                            Submit
                                        </Button>

                                    </div>
                                </div>
                                <br/>

                            </form>



                        </div>

                        <div className='col col-lg-1'>

                        </div>
                    </div>

                </div>



            </div>
        )
    }
}


export default Sell