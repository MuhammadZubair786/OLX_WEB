import React,{useState} from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import './Post.css'
// import { GoDeviceMobile } from "react-icons/go";
// import  { GrFormNext } from "react-icons/gr";
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import set_data from '../Store/Action';
import axios from 'axios';
// import * as firebase from 'firebase';
import firebase from '../Config/firebase'
import {storage} from '../Config/firebase'
import Footer from './Footer'



// 

class Sell extends React.Component {
    constructor(){
        super();
      

        this.state={
            item_value:'',
            selectValue:'',
            // select_img:null,
            image:null,
            url:'',
            item_price:'',
            item_condition:'',
            location:'',
            contact_no:'',
            description:'',
            
            

        
        }
    }



    handleChange = (e) => {
        console.log(e.target.files[0])
        if (e.target.files[0]) {
            this.setState({
                image:e.target.files[0]
            })
          }
    }


    handleUpload = () =>{
        console.log('IMAGE :',this.state.image)
      let   image = this.state.image
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
    //   snapshot => {
    //     const progress = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //     setProgress(progress);
    //   },
    //   error => {
    //     console.log(error);
    //   },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
              console.log(url)
            this.setState({
                url:url
            });
          });
      }
    );
    }


    cancel = ()=>{
        // alert("CALL THIS FUNCTION")
        this.props.history.push('/')
    }


     

     
    

     


    ChangeSelectValue= (e)=>{
        this.setState({selectValue:e.target.value});
      }

      ChangeCondition= (e)=>{
        this.setState({item_condition:e.target.value});
      }

    maindata = ()=> {
        
        

    //     const value = Math.random()*100000
    //    const  key =value.toFixed()
       
        
        const state=this.state

        const User=this.props.current_user
        const User_Name=User.User_Name
        const User_Email=User.User_Email
        const User_Id=User.User_Id
        const User_PhotoUrl=User.User_PhotoURL

        const Item_Name = state.item_value
        const Item_Cateorgy=state.selectValue
        const Item_Price= state.item_price
        const Image_Url=state.url
        const Location= state.location
        const Contact = state.contact_no
        const Item_Condition=state.item_condition
        const Item_Description=state.description 

        if(Item_Name==''){
        alert("please Enter Item_Name")
        }
        else if(Item_Cateorgy==''){
            alert("Please Enter Item_Cateorgy")
        }
        else if(Image_Url==''){
            alert("PLease Insert Image And Upload")
        }
        else if(Location==''){
            alert("PLease Enter Your Location")
        }
        else if(Contact==''){
            alert("PLease Enter Price ")
        }
        else if(Contact==''){
            alert("PLease Enter Your Contact No")
        }
        else if(Item_Condition==''){
            alert("PLease Enter Item Condition")
        }
        else{
            let date = new Date().toLocaleDateString()

           

            let  data = {

                User_Id:User_Id,
                User_Email:User_Email,
                User_Name:User_Name,
                User_PhotoURL:User_PhotoUrl,
                Item_Name:Item_Name,
                Item_Cateorgy:Item_Cateorgy,
                Item_Price:Item_Price,
                Image_Url:Image_Url,
                Location:Location,
                Contact:Contact,
                Item_Condition:Item_Condition,
                Description:Item_Description,
                DATE:date
                // uid:key
    
            }
            console.log(data)
            this.props.set_data(data)
           firebase.database().ref('/').child('Store').push(data)
          
           this.setState({
           item_value:'',
            selectValue:'',
            item_price:'',
            url:'',
            location:'',
            contact_no:'',
           item_condition:'',
            description:''

           })

        this.props.history.push('/')
     
           
           
          
            
        }

      
       


    }

    render() {
        console.log("current user :",this.props.current_user)
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
                        <div className='col col-lg-10 col-sm-12 col-md-10 col-12 ' >
                            <form style={{ backgroundColor: '#EEEBEA' }}>
                                <br />
                                <div className='row'>
                                    <div className='col col-lg-4' >
                                        <h4 style={{ marginLeft: '10px' }}>Item Name</h4>

                                    </div>

                                    <div className='col col-lg-8 ' >
                                        <input value={this.state.item_value} onChange={(e)=>{this.setState({item_value:e.target.value})}} type='text' className='form-control' style={{ width: '90%' }} placeholder='Item Name'></input>

                                    </div>
                                </div>


                                <div className='row' style={{ marginTop: '10px' }}>
                                    <div className='col col-lg-4'  >
                                        <h4 style={{ marginLeft: '10px' }}>Item Cateorgy</h4>

                                    </div>

                                    <div className='col col-lg-8 ' >
                                        <select className='form-control' style={{ width: '90%' }}
                                         value={this.state.selectValue} 
                                         onChange={this.ChangeSelectValue} 
                                         >
                                            <option >Select Cateorgy</option>
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
                                        <h4 style={{ marginLeft: '10px' }}>Item Condition</h4>

                                    </div>

                                    <div className='col col-lg-8 ' >
                                        <select className='form-control' style={{ width: '90%' }}
                                         value={this.state.item_condition} 
                                         onChange={this.ChangeCondition} 
                                         >
                                            <option >Select Cateorgy</option>
                                            <option>New</option>
                                            <option>Used</option>
                                           

                                        </select>

                                    </div>
                                </div>

                                <div className='row' style={{ marginTop: '10px' }}>
                                    <div className='col col-lg-4'  >
                                        <h4 style={{ marginLeft: '10px' }}>Item Price</h4>

                                    </div>

                                    <div className='col col-lg-8 ' >
                                        <input type='number' value={this.state.item_price} onChange={(e)=>{this.setState({item_price:e.target.value})}} className='form-control' style={{ width: '90%' }} placeholder='Item Price in Rs'></input>

                                    </div>
                                </div>

                                <div className='row' style={{ marginTop: '10px' }}>
                                    <div className='col col-lg-4'  >
                                        <h4 style={{ marginLeft: '10px' }}>Item Image</h4                    >

                                    </div>

                                    <div className='col col-lg-8 '>
                                       <input type='file' width='100%' accept="image/*" onChange={(e)=>{this.handleChange(e)}}></input>
                                        <button type='button'  onClick={()=>{this.handleUpload()}}  > Upload! </button> 
                                        
                                       
     
      
     

                                    </div>
                                </div>


                                <div className='row' style={{ marginTop: '10px' }}>
                                    <div className='col col-lg-4'  >
                                        <h4 style={{ marginLeft: '10px' }}>Location</h4>

                                    </div>

                                    <div className='col col-lg-8 ' >
                                        <input type='text' value={this.state.location} onChange={(e)=>{this.setState({location:e.target.value})}}  className='form-control' style={{ width: '90%' }} placeholder='Where Located '></input>

                                    </div>
                                </div>

                                <div className='row' style={{ marginTop: '10px' }}>
                                    <div className='col col-lg-4'  >
                                        <h4 style={{ marginLeft: '10px' }}>Contact No </h4>

                                    </div>

                                    <div className='col col-lg-8 ' >
                                        <input type='number' value={this.state.contact_no} onChange={(e)=>{this.setState({contact_no:e.target.value})}}  className='form-control' style={{ width: '90%' }} placeholder='Contact No'></input>

                                    </div>
                                </div>


                                <div className='row' style={{ marginTop: '10px' }}>
                                    <div className='col col-lg-4'  >
                                        <h4 style={{ marginLeft: '10px' }}>Item Description</h4>

                                    </div>

                                    <div className='col col-lg-8 ' >
                                        <textarea type='' value={this.state.description} onChange={(e)=>{this.setState({description:e.target.value})}} className='form-control' style={{ width: '90%' }} placeholder='Write Descriptipn About Item .... '></textarea>

                                    </div>
                                </div>

                                <div className='row' style={{ marginTop: '10px' }}>
                                    <div className='col col-lg-8'>

                                    </div>
                                    <div className='col col-lg-2' style={{ textAlign: 'right' }}>
                                        <Button variant="contained" color="secondary" onClick={()=>this.cancel()}>
                                            Cancel
                                </Button>

                                    </div>
                                    <div className='col col-lg-2' style={{ textAlign: 'left' }} >
                                        <Button variant="contained" color="primary" onClick={()=>{this.maindata()}}>
                                            Submit
                                        </Button>

                                    </div>
                                </div>
                                <br/>

                            </form>



                        </div>
                        <br/>
                        <br/>

                      
                    </div>
                    <br/>
                        <br/>

                </div>
                <Footer/>




            </div>
        )
    }
}


const mapStateToProps = (state)=>({
    name:state.name,
    current_user:state.current_user
})

const mapDispatchToProps=(dispatch)=>({

    set_data:(data) => dispatch(set_data(data)),
    
  })


export default connect(mapStateToProps,mapDispatchToProps) (Sell);