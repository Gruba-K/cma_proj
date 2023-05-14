export interface Contact{
    id:string | undefined;
    firstName:string| undefined;
    lastName:string| undefined;
    gender:string| undefined;
}

export type ContactsState = {
    contacts:Contact[];
};

export enum ContactsActionsTypes{
    ADD_CONTACT = 'ADD_CONTACT',
    DELETE_CONTACT = 'DELETE_CONTACT',
    EDIT_CONTACT = 'EDIT_CONTACT',
}