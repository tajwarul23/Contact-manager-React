import React from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
// import GoogleIcon from '@mui/icons-material/Google';
// import Delete from '@mui/icons-material/Google';
import Delete from '@mui/icons-material/Delete';
import Person from '@mui/icons-material/Person';

const SingleContact = ({ contact,deleteContact }) => {
    
    return (
        <div className="card w-96 bg-base-100 shadow-lg mt-5 mb-5 ">
            <div className="card-body">
                <div className='flex flex-row'>
                <h2 className="card-title">{contact.name}</h2>
                <Person className='ml-5'></Person>
                </div>
                <p>{contact.email}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline text-red-600 outline-none" onClick={()=>{deleteContact(contact.id)}} ><Delete></Delete></button>
                </div>
            </div>
        </div>

    );
};

export default SingleContact;