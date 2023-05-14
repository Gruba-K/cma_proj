import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../store/actions/contacts';

const DeleteContact = () => {
  const [id, setId] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    dispatch(deleteContact(id));
    setId('');
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="id" className="block text-gray-700 font-bold mb-2">
          Contact ID:
        </label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border rounded py-2 px-3 w-full"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
      >
        Delete Contact
      </button>
    </form>
  );
};

export default DeleteContact;
