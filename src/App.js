import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home' 
import View from './components/View'
import ContactUs from './components/ContactUs'
import Help from './components/Help'
import DataInsert from './components/DataInsert'
import Navbar from './components/Navbar'


const App=()=>{
  return (
    <>
    <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home></Home>}>Home</Route>
    <Route path='/View' element={<View></View>}>View</Route>
    <Route path='/ContactUs' element={<ContactUs></ContactUs>}>ContactUs</Route>
    <Route path='/Help' element={<Help></Help>}>Help</Route>
    <Route path='/DataInsert' element={<DataInsert></DataInsert>}>DataInsert</Route>
   </Routes>
   </>  
  )
}

export default App







/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
