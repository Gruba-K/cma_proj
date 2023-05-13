import React from 'react';
import './App.css';
import Test from './components/Test';
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';    
import Contact from './components/Contact'
function App() {
  return (
    <>
    <div className="bg-blue-900 p-5 text-center">
      <h1 className="text-white text-5xl">Contact Management App</h1>
    </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Test />}></Route>
          
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
