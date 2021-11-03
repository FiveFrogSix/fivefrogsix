import React from 'react'
import './App.scss';

import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Experience from './components/Experience'


import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/tab'
import 'bootstrap/js/dist/scrollspy'






function App() {
 return (
   <div className="container-fluid p-0">
      <Navbar></Navbar>
      <Intro></Intro>
      <Aboutme></Aboutme>
      <Skills></Skills>
      <Experience></Experience>
   </div>


 )
}


export default App;
