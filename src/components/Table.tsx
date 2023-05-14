import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../store/actions/contacts';



let TableBody=()=>{
    return <h1></h1>;
};


let Table:React.FC = () =>{
   
    const dispatch = useDispatch();
  
    
    const contacts = useSelector((state:RootState)=>state.contacts.contacts)

   
 return (
    <div className="">
        <table className="table-auto w-full mx-20 my-5 ">
        <thead>
            <tr className="border-b  border-seperate border-gray-700 ">
                <th>FirstName</th>   
                <th>LastName</th>
                <th>Gender</th>
                <th>Action Edit</th>
                <th>Action Delete</th>
            </tr>
        </thead>
        <tbody>
            {contacts.map((contact)=>(
             <tr key={`${contact.id}`} className="border-b  border-seperate border-gray-700 ">
                <td className="text-center">{contact.firstName}</td>
                <td  className="text-center">{contact.lastName}</td>
                <td  className="text-center">{contact.gender}</td>
                <td  className="text-center"><Link to={`/edit/${contact.id}`}><button
                className="mx-20 my-1  bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                >Edit</button></Link></td>
                <td  className="text-center">
                    <button onClick={()=>{
                    dispatch(deleteContact(contact.id));
                }}
                className="mx-20 my-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                >Delete</button></td>

             </tr>
            ))}
            
            
        </tbody>
        
    </table>
    </div>
    
 );
};

export default Table;
