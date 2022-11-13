import React from 'react';
import SingleContact from './SingleContact';

const ContactList = ({contacts,deleteContact}) => {
    // const {contacts}=props?.contacts
    
    return (
        <div className='grid place-items-center h-full'>
            {
                contacts?.map(contact=><SingleContact 
                key={contact.id}
                contact={contact}
                deleteContact={deleteContact}
                
                ></SingleContact>)
            }
        </div>
    );
};

export default ContactList;