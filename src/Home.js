import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import firebase from './Config/firebase'
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Slider from './Components/Slider'
import Footer from './Components/Footer'
import Company from './Components/Company'
import Tryolx from './Components/Tryolx'
import Card from './Components/Card'

import './App.css';

function App() {
  
  return (
    <div>
      <Navbar/>

      {/* <ChildHeader/> */}
      <Menu/>

      <Slider/>
      <br/><br/>
      <Card/>
      <br/><br/>
     
      <Tryolx/>
     
      <Company/>

      <Footer/>

      

      
    </div>
    

  );
}

export default App;
