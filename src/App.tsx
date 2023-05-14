import React from 'react';
import './App.css';
import Test from './components/Test';
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';    
import Contact from './components/Contact';
import AddContact from './components/ContactForm';
import EditContact from './components/EditContact';
import DeleteContact from './components/DeleteContact';


const App:React.FC=()=> {
  return (
    <>

    
      <div className="bg-gray-900 p-5 font-serif">
        <h1 className=" text-amber-600 text-5xl text-center">Contact Management App </h1>
        
      </div>
     
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Test />}></Route> 
          <Route path='/contactform' element={<AddContact />}></Route> 
          <Route path='/edit/:cid' element={<EditContact />}></Route> 
          <Route path='/delete' element={<DeleteContact />}></Route> 
        </Routes>
      </BrowserRouter>
   

    </>
  );
}

export default App;
