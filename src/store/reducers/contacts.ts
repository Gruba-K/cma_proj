import { ContactsActionsTypes,ContactsState } from "../actions/types";

const initialState: ContactsState = {
    contacts:[],
};

const contactsReducer = (state=initialState, action:any):ContactsState =>{
    switch(action.type){
        case ContactsActionsTypes.ADD_CONTACT:
            return{
                ...state,
                contacts:[...state.contacts,action.payload],
            };

        case ContactsActionsTypes.DELETE_CONTACT:
            return {
                ...state,
                contacts:state.contacts.filter((contact)=>contact.id !== action.payload),
            };


        case ContactsActionsTypes.EDIT_CONTACT:
            return {
                ...state,
                contacts:state.contacts.map((contact)=>
                contact.id === action.payload.id?action.payload:contact
                ),
            };
            
        default:
            return state;

        }

    }

export default contactsReducer;