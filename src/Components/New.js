import React from 'react'
import firebase from '../config/firebase'



import { signInWithGoogle } from '../config/firebase';
import { auth } from '../config/firebase';

import { BrowserRouter as Router,Route,Link } from "react-router-dom";



class Navbar extends React.Component {

    constructor() {
        super();
        this.state = {
          currentUser: null
        };
      }
    
      unsubscribeFromAuth = null;
    
      componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
          this.setState({ currentUser: user });
        });
      }
    
      componentWillUnmount() {
        this.unsubscribeFromAuth();
      }


        render(){
        return(
            <div className="container-fluid header">

                <div className="row">

                    <div className="img">
                        {/* <img  src={logo}/> */}
                    </div>

                    <div className="search-city"> 
                        <i className="fa fa-search"></i>
                        <input type="text" placeholder="Search city area or location"/>
                        <i className="fa fa-angle-down"></i>
                    </div>

                    <div className="search-things">
                        <input type="text" placeholder="Find Cars, Mobile phones and more.."/>
                    </div>

                    <div className="search-icon">   
    
                    <i className="fa fa-search"></i>
                    </div>

                    <div className="icons">
                        <i className="fa fa-comment-o"></i>
                        <i className="fa fa-bell-o"></i>

                            {

                                // ye dekhein , ye jo urly brackets me likha hy na , isi se imag show hrhi hy sei sei  copy kar layo g
                                this.state.currentUser 
                                ?

                                    <React.Fragment>
                                        <img className="rounded-circle" src={this.state.currentUser.photoURL} width="30px"/>

                                            <div className="dropdown">
                                                <span className="dropdown-toggle" data-toggle="dropdown">
                                                    <i className="fa fa-angle-down"></i>
                                                </span>
                                                <div className="dropdown-menu">
                                                    <a  onClick={()=> auth.signOut()}  style={{marginLeft:10, padding:10}}>LogOut</a>
                                                </div>
                                            </div>
                                    </React.Fragment>

                                :
                                
                                            <a data-toggle="modal" data-target="#exampleModalCenter" style={{fontWeight:700, marginRight:12, position:'relative', top:-6}}>Login</a>


                            }

                        <button>
                            <Link to="/sell">
                                <i className="fa fa-plus" style={{color:'black'}}></i><span style={{color:'black'}}>SELL</span>
                                </Link>
                        </button>
                    </div>

                </div>



                    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                   
                                      
                                       

                                     <p style={{textAlign:'center', color:'grey', fontSize:16, marginTop:10}}>Help make OLX safer place to buy and sell</p>
                                    
                                    <button onClick={this.Hello} className="auth">Continue With Facebook</button>

                                    {/* google auth  */}

                                    <div className='user-info'>
                                        {
                                            this.state.currentUser 
                                            ?
                                                <div></div>
                                            :
                                                <button onClick={signInWithGoogle} className="auth">Continue With Google</button>
                                        }
                                    </div >


                                    <button className="auth">Continue With Phone</button>
                                    <button className="auth">Continue With Email</button>

                                    <p style={{textAlign:'center', color:'grey', fontSize:12, marginTop:20 , marginBottom:50}}>We Wont share your personal details with anyone</p>
                                </div>

                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}


class ChildHeader extends React.Component {
            Hello=()=>{
                  var provider = new firebase.auth.GoogleAuthProvider();
                  firebase.auth().signInWithPopup(provider)
                
            }

        render(){
            return (
                <div className="container-fluid ChildHeader">
                    <div className="row">

                        <div className="categories">ALL CATEGORIES
                            <i className="fa fa-angle-down"></i>
                        </div>

                        <div className="divCategory">
                            <span> Mobile Phones </span>
                            <span> Cars </span>
                            <span> Motorcycles </span>
                            <span> Houses </span>
                            <span> TV - Video-Audio </span>
                            <span> Tablets </span>
                            <span > Land & Plots </span>
                        </div>

                        <div className="divCategory1">
                            <span> M.. </span>
                            <span> Cars </span>
                            <span> M.. </span>
                            <span> H.. </span>
                            <span> TV. </span>
                            <span> T.. </span>
                            <span > L.. </span>

                        </div>

                    </div>



                    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                  

                                     <p style={{textAlign:'center', color:'grey', fontSize:16, marginTop:10}}>Help make OLX safer place to buy and sell</p>
                                    <button onClick={this.Hello} className="auth">Continue With Facebook</button>
                                    <button className="auth">Continue With Google</button>
                                    <button className="auth">Continue With Phone</button>
                                    <button className="auth">Continue With Email</button>
                                    <p style={{textAlign:'center', color:'grey', fontSize:12, marginTop:20 , marginBottom:50}}>We Wont share your personal details with anyone</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }


export{
    Navbar,
    ChildHeader,
    
};