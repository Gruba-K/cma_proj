import React,{useState} from 'react';
import Contact from './Contact'
import {Link} from 'react-router-dom';
import { BrowserRouter, Routes,Route } from 'react-router-dom';  

let Test  = ()=>
{
    return (
        <div className= "text-white bg-gray-600 mx-40 my-20">
            <div id = "main" className = "flex">
                <div className="bg-gray-500 w-1/5 h-96">
                    <ul className="max-w-md space-y-1 text-white list-disc list-inside dark:text-white">
                        <li className=" mt-8 mx-4 cursor-pointer">
                            <Link to="contact">Contacts</Link>
                            </li>
                        <li className="cursor-pointer mx-4">Charts & Maps</li>
                    </ul>
                </div>
                <div className=" text-white w-4/5 h-96">
                <Routes>
                    <Route path='/contact' element={<Contact/>}></Route>
                </Routes>
                   
                </div> 
            </div>
        </div>
    );
} ;
export default Test;