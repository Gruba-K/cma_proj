import React from 'react';
import Table from './Table';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducers';


type Contact={

};
const Contact = () =>{
    
    return (
        <>
            <div className="bg-gray-700 p-5 text-center">
                <h1 className="text-amber-600 text-2xl font-serif">Contact</h1>
            </div>
            <div className="text-black w-4/5 h-96 ">
               <Link to="/contactform">
                <button className="mx-20 mt-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ">Create Contact +</button>
                </Link> 
                <Table/>
            </div> 
        </>
        
    );
};
export default Contact;