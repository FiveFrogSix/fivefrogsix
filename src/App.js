import React from 'react'
import './App.scss';
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Aboutme from './components/Aboutme'



function App() {
 return (
   <div className="container-fluid p-0">
      <Navbar></Navbar>
      <Intro></Intro>
      <Aboutme></Aboutme>
   </div>


 )
}


export default App;
