import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import SearchIcon from '@material-ui/icons/Search';
import { BsChat } from "react-icons/bs";
import firebase from 'firebase'

import { AiOutlineBell, AiOutlineDown } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import { auth } from '../Config/firebase';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';
import set_user from '../Store/Action/Firebase_data'


class Navbar extends React.Component {


  constructor(props) {
    super(props)


    this.state = {
      currentUser: null
    };




    this.Gsigin = this.Gsigin.bind(this)





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


  //GOOGLE SIGIN

  Gsigin() {

    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      var token = result.credential.accessToken;

      var user = result.user;
      console.log(user)
      console.log(user.displayName)

      console.log(token)

      console.log(user.photoURL)
 

    const USER = {
      User_Emai:user.email,
      User_Name:user.displayName,
      User_PhotoURL:user.photoURL,
      User_Contact : user.phoneNumber,
      User_uid:user.uid

    }
    global.USER=USER
    

    firebase.database().ref('/').child(`Users/${USER.User_uid}`).set(USER)
   

    


    }).catch(function (error) {
      
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;

      console.log("Error code :", errorCode, "Error Message :", errorMessage,"Error Email :",email,"Credential :",credential)
      // ...
    });

    console.log(this.state.SigIn)
    // this.setState({
    //   SigIn:true
    // })

  }


  //GITHUB LOGIN

  Githublogin = () => {

    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...

      console.log(user)
      console.log(user.displayName)


      const USER = {
        User_Emai:user.email,
        User_Name:user.displayName,
        User_PhotoURL:user.photoURL,
        User_Contact : user.phoneNumber,
        User_uid:user.uid
  
      }
  
      firebase.database().ref('/').child(`Users/${USER.User_uid}`).set(USER)

    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

  }


  //FBACEBOOK LOGIN

  FbLogin = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...

      // DISPLAY NAME 
      console.log(user.displayName)

      // DISPLAY ToKEN
      console.log(token)

      // DISPLAY photoURL
      console.log(user.photoURL)

      const USER = {
        User_Emai:user.email,
        User_Name:user.displayName,
        User_PhotoURL:user.photoURL,
        User_Contact : user.phoneNumber,
        User_uid:user.uid
  
      }
  
      firebase.database().ref('/').child(`Users/${USER.User_uid}`).set(USER)

    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...

      console.log("Error code :", errorCode, "Error Message :", errorMessage)
    });
  }

  //EMAIL LOGIN

  Emaillogin = () => {
    console.log("email log in")


  }

  check = () =>{
    if(this.state.currentUser==null){
      alert("Please Sign In User")
    }
   else{
     this.props.set_user(this.state.currentUser)
   }
   
  }







  render() {
    // console.log("DATA FROM STATE :",this.props.name)
    return (
      <div className="container-fluid" style={{ backgroundColor: '#FAF8F8' }}>
        <div className="row">
          <div className="col col-lg-1 col-md-1 col-sm-2 col-5 text-center ">
            <a className="" rel="" data-aut-id="btnOlxLogo" href="/"><svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" className=""><path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg></a>
          </div>

          <div className="col col-lg-3 col-md-3 col-sm-3 d-none d-sm-block Search" style={{ border: '3px solid', borderRadius: '10px', backgroundColor: 'white', height: '50px' }}>
            {/* <SearchIcon/> */}

            <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan active-cyan-2 mt-2 Search">
              <FontAwesomeIcon icon={faSearch} />

              <input className="form-control form-control-sm " style={{ border: '0px', width: '60%' }} type="text" placeholder="Search City,area or Local" aria-label="Search" />
              <AiOutlineDown style={{ fontSize: '22px', fontWeight: 'bold' }} />
            </form>
            {/* <div class="IOsQD"><div data-aut-id="locationBox" class="_16LoD"><span><svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path></svg></span><input class="_1jABB" value="Pakistan" placeholder="Search city, area or locality" /><span class="I95t7"><button type="button" class="rui-3mpO_" role="button" tabindex="0" data-aut-id="" title=""><svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg></button></span></div></div> */}
          </div>

          <div className="col col-lg-5 col-md-4 col-sm-3 col-5 d-none d-sm-block input"  >
            <div className="input-group md-form form-sm form-2 pl-0" style={{ border: '3px solid', borderRadius: '10px', backgroundColor: 'white', height: '50px' }}>
              <input className="form-control my-0 py-1 " style={{ border: '0px' }} type="text" placeholder="Find Cars,Mobile Phone and more" aria-label="Search" />
              <div className="input-group-append">
                <span className="input-group-text SearchIcon " style={{ height: '51px', marginTop: '-4px', border: '1px solid', borderRadius: '5px' }}><FontAwesomeIcon icon={faSearch} style={{ color: 'white', }} /></span>
              </div>
            </div>

          </div>

          {
            this.state.currentUser

              ?



              <React.Fragment>
                <BsChat size="30px" />
                <AiOutlineBell size="30px" style={{ marginLeft: 20 + 'px', fontWeight: 'bold' }} />
                <img className="rounded-circle" src={this.state.currentUser.photoURL} width="30px" />

                <div className="dropdown">
                  <span className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-angle-down"></i>
                  </span>
                  <div className="dropdown-menu">
                    <a onClick={() => auth.signOut()} style={{ marginLeft: 10, padding: 10 }}>LogOut</a>
                  </div>
                </div>
              </React.Fragment>

              :


              <div className='col-lg-3  col-sm-2 col-md-2 col-0 d_none' >
                <button style={{ float: 'right' }}><a data-toggle="modal" data-target="#exampleModal" style={{ padding: 10, }}>Login</a></button>
              </div>





          }
          <div className="col-lg-1 col-md-2 col-sm-2 col-0">
            {
              this.state.currentUser ?
                <Link exact to='/about' style={{color:'white'}}> 
                <button style={{ borderRadius: '20px', borderTop: '5px solid green', borderRight: '5px solid blue', borderBottom: '5px solid orange' }} >&nbsp; &nbsp;<GrFormAdd /><b style={{ fontSize: 20 + 'px' }} onClick={this.check}>Sell &nbsp; </b></button>
                   </Link>
                :
                <button style={{ borderRadius: '20px', borderTop: '5px solid green', borderRight: '5px solid blue', borderBottom: '5px solid orange' }}>&nbsp; &nbsp;<GrFormAdd /><b style={{ fontSize: 20 + 'px' }} onClick={this.check}>Sell &nbsp; </b></button>

            }
                </div>

           
        







        </div>


        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              {/* <div className="modal-header"> */}
              {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
              {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>

                </button> */}
              {/* </div> */}
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <br />
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="Img/b.gif" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="Img/p.gif" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="Img/h.gif" alt="..." />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>






                <p style={{ textAlign: 'center', color: 'grey', fontSize: 16, marginTop: 10 }}>Help make OLX safer place to buy and sell</p>
                <button className="auth" onClick={this.FbLogin}>Continue With Facebook</button>
                <button className="auth" onClick={this.Gsigin}>Continue With Google</button>
                <button className="auth" onClick={this.Githublogin}>Continue With GitHub</button>
                <button className="auth" onClick={this.Emaillogin}>Continue With Email</button>
                <p style={{ textAlign: 'center', color: 'grey', fontSize: 12, marginTop: 20, marginBottom: 50 }}>We Wont share your personal details with anyone</p>
              </div>
              {/* <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div> */}
            </div>
          </div>
        </div>



      </div>
      // <div className="container-fluid header">
      //           <div className="row">

      //               <div className="img">
      //               <a className="" rel="" data-aut-id="btnOlxLogo" href="/"><svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" className=""><path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg></a>

      //               </div>

      //               <div className="search-city"> 
      //                   <i className="fa fa-search"></i>
      //                   <input type="text" placeholder="Search city area or location"/>
      //                   <i className="fa fa-angle-down"></i>
      //               </div>

      //               <div className="search-things">
      //                   <input type="text" placeholder="Find Cars, Mobile phones and more.."/>
      //               </div>

      //               <div className="search-icon">   

      //               <i className="fa fa-search"></i>
      //               </div>

      //               <div className="icons">
      //                   <i className="fa fa-comment-o"></i>
      //                   <i className="fa fa-bell-o"></i>


      //                   <div className="dropdown">
      //                        <span className="dropdown-toggle" data-toggle="dropdown">
      //                           <i className="fa fa-angle-down"></i>
      //                        </span>
      //                       <div className="dropdown-menu">
      //                           <a data-toggle="modal" data-target="#exampleModalCenter" style={{marginLeft:10, padding:10}}>Login</a>
      //                       </div>
      //                   </div>

      //                   <button>
      //                       <i className="fa fa-plus"></i><span>SELL</span>
      //                   </button>

      //               </div>

      //           </div>
      //       </div>







    )
  }
}


const mapStateToProps = (state)=>({
  name:state.name
})

const mapDispatchToProps = (dispatch)=>({
  set_user : (data) => dispatch(set_user(data))
})

export default connect(mapStateToProps,mapDispatchToProps) (Navbar);