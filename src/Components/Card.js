import React from 'react'
import { Route, Switch,Link } from 'react-router-dom';


class Card extends React.Component{
    render(){
        return(
            <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5Wj2GYxpaYCHtBWef5L5aluy1yRJXfXfLCQ&usqp=CAU" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="btn btn-primary"> Go somewhere</a>
            </div>
          </div>
        )
    }
}

export default Card;