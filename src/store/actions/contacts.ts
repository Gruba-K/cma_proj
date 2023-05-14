import {ContactsActionsTypes, Contact} from './types';

export const addContact = (contact:Contact) =>({
    type:ContactsActionsTypes.ADD_CONTACT,
    payload: contact,
});

export const deleteContact = (id:string| undefined) => ({
    type:ContactsActionsTypes.DELETE_CONTACT,
    payload: id,
});

export const editContact = (contact:Contact) =>({
    type:ContactsActionsTypes.EDIT_CONTACT,
    payload:contact,
});