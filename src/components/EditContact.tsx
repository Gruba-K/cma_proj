import React,{useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from '../store/actions/contacts';
import { useParams } from 'react-router-dom';
import { RootState } from '../store/reducers';
import { Link } from "react-router-dom";


let EditContact=()=>{
    
    const {cid} = useParams<{cid:string}>();
    const contact = useSelector((state: RootState) => state.contacts.contacts.find((contact)=>contact.id===cid));
  console.log(contact?.id);
 
    const [id, setId] = useState(contact?.id);
    const [firstName, setFirstName] = useState(contact?.firstName);
    const [lastName, setLastName] = useState(contact?.lastName);
    const [gender, setGender] = useState(contact?.gender);
    const dispatch = useDispatch();

  

  
 
  const handleSubmit = (e:any) => {
    e.preventDefault();
    const editContact1 = {
      id,
      firstName,
      lastName,
      gender
    };
    
    dispatch(editContact(editContact1));
    alert("Contact updated Successfully. Click Back button to return to HomePage!.")
  };
  
    return (
        <>
        <form className="flex flex-col space-y-6 my-20 " >
        <h1 className="text-center text-amber-600 text-2xl">Edit Form</h1>
        <div>
          <label htmlFor="firstName" className="block text-gray-700 font-bold">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-gray-700 font-bold">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <span className="block text-gray-700 font-bold mb-2">Gender</span>
          <div className="flex items-center space-x-4">
            <label htmlFor="male" className="flex items-center space-x-2">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
                className="form-radio h-4 w-4 text-indigo-600"
                required
              />
              <span className="text-gray-700">Male</span>
            </label>
            <label htmlFor="female" className="flex items-center space-x-2">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
                className="form-radio h-4 w-4 text-indigo-600"
                required
              />
              <span className="text-gray-700">Female</span>
            </label>
          </div>
        </div>
       
      </form>
       <div className="flex-row">
       <button
       onClick={handleSubmit}
         type="submit"
         className="w-20  bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
       >
         Update
       </button>
       <button
         className="w-20 bg-indigo-600 text-white px-4 mx-5 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
       >
        <Link to="/">Back</Link> 
       </button>
       </div>
      </>
    );
}
export default EditContact;