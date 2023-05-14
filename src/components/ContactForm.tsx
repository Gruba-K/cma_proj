import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import {addContact} from '../store/actions/contacts';
import {Contact} from '../store/actions/types';
import { Link } from 'react-router-dom';


const AddContact:React.FC = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('male');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    
    const newContact:Contact={
        id: uuid(),
        firstName,
        lastName,
        gender
    };
    dispatch(addContact(newContact));
    // handle form submission here
    alert("Contact Created Successfully. Click Back button to return to HomePage!.")
  };

  return (
    <>
    <form className="flex flex-col space-y-6 my-20 " >
      <h1 className="text-center text-amber-600 text-2xl">Create Form</h1>
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
        Submit
      </button>
      <button
        className="w-20 bg-indigo-600 text-white px-4 mx-5 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
      >
       <Link to="/">Back</Link> 
      </button>
      </div>
    </>
  );
};

export default AddContact;
