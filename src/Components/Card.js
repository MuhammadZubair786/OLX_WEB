import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import firebase from '../Config/firebase'
import get_data from '../Store/Action/get_data'
import { GrFavorite } from "react-icons/gr";


class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      DATA: []
    }
  }


  set_data = (v) => {
    console.log("USER DATA", v)


    //   firebase.database().ref("Store").on("child_added",(messages)=>{
    //     console.log("message po = >",messages.val())
    //     this.state.DATA.push(messages.val())
    //     this.setState({
    //         DATA:this.state.DATA
    //     })
    //     // console.log("USER DATA :",this.state.DATA[0].Contact)


    // }

    // )







    // firebase.database().ref('/').child('Store').once('child_added',(data)=>{
    //   console.log('firebase Data == >',data.val())
    //   this.state.DATA.push(data.val())

    //   this.setState({
    //     DATA:this.state.DATA
    //   })
    // console.log(this.state.DATA)



    // })

  }

  componentDidMount() {
    firebase.database().ref("Store").on("child_added", (messages) => {
      console.log("message po = >", messages.val())
      this.state.DATA.push(messages.val())
      this.setState({
        DATA: this.state.DATA
      })
      // console.log("USER DATA :",this.state.DATA[0].Contact)


    })
  }


  render() {

    return (

      <div className='container'>
        <div className='row'>

          {this.state.DATA.map((v, i) => {
            return <Link
              to={{
                pathname: '/post'
              }}
              // about:{
              //   data:v.User_Name,
              //   name:'zubair'
              // }

              onClick={() => { this.props.get_data(v) }} style={{ textDecoration: 'none' }}>
              <div className='col col-lg-4 ' key={i}>
                <br />
                <br />
                <br />
                <div className='card' style={{width:'380px'}}>

                <div className="card-body" style={{ backgroundImage: `URL${v.Image_Url}` }}>
                  <img className="card-img-top" src={v.Image_Url} alt="Card image cap" style={{ width: '250px', height: '150px' }} />
                  <GrFavorite style={{ float: 'right', fontSize: '20px' }} />
                  <br />  <br />
                  <h5 className="card-title">Rs.{v.Item_Price}</h5>
                  <h5 className="card-text">{v.Item_Name}</h5>
                  <br />
                  <h6 className="card-text">{v.Description}</h6>
                  <p className='card-text'><b>{v.Location}</b><i style={{ float: 'right' }}>{v.DATE}</i></p>
                
                </div>

              </div>
              </div>

            </Link>
          })}





        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  current_user: state.current_user
})

const mapDispatchToProps = (dispatch) => ({
  get_data: (data) => dispatch(get_data(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);