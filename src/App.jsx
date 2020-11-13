import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch} from 'react-router-dom';
// import firebase from './Config/firebase'
// import Navbar from './Components/Navbar';
// import Menu from './Components/Menu';
// import Slider from './Components/Slider'
// import Footer from './Components/Footer'
// import Company from './Components/Company'
// import Tryolx from './Components/Tryolx'
import Home from './Home'
import About from './About'

import './App.css';

function App() {
  
  return (
    <>

{/* <Link exact to='/about' >About</Link> */}
{/* <Link exact to='/'>Home</Link> */}
    
    
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </Switch>
      {/* <About/>
      <Home/> */}



      </>
      

  );
}

export default App;
