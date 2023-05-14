import React,{useState} from 'react';
import Contact from './Contact';
import Chart from './Chart';
import {Link} from 'react-router-dom';
import { BrowserRouter, Routes,Route } from 'react-router-dom';  


let Test  = ()=>
{
    let [nav,setnav] = useState(<Contact/>);
    const contact = (event:React.MouseEvent<HTMLLIElement, MouseEvent>)=>{
        setnav(<Contact/>)
    };
    const chart = (event:React.MouseEvent<HTMLLIElement, MouseEvent>)=>{
        setnav(<Chart/>)
    };

    return (
        <div className= " bg-gray-100 mx-40 my-20 ">
            <div id = "main" className = "flex">
                <div className="bg-gray-700 w-1/5 h-96">
                    <ul className="max-w-md space-y-1 text-amber-600 list-disc list-inside dark:text-white">
                        <li className="mt-20 mx-10 cursor-pointer font-mono" onClick={contact}>
                            Contacts
                            </li>
                        <li className="cursor-pointer mx-10 font-mono" onClick={chart}>Charts & Maps</li>
                    </ul>
                </div>
                <div className=" text-white w-4/5 h-96 overflow-auto">
                {nav}

                   
                </div> 
            </div>
        </div>
    );
} ;
export default Test;