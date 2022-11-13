
import React, { useState } from 'react';

const AddContact = ({addContact,handleAddContact}) => {
  const [name,setName]=useState("");
  const [email, setEmail]=useState("");

  const handleName=(e)=>{
    setName(e.target.value);
    // console.log(e.target.value);
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value);
    // console.log(e.target.value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    console.log("hello");
    if(name==="" || email===""){
      alert("All the fields are required!!!");
      return;
    }
    addContact({
      name:name,
      email:email
    })
    
  }
  return (
    <div className='grid place-items-center mt-5'>
      <div class=" max-w-xs mt-5  ">
        <form class="bg-white  rounded px-8 pt-6 pb-8 mt-8 border-zinc-700 border-solid border-2 " onSubmit={handleSubmit} >
          
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Name
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='name' type="text" placeholder="Username" onChange={handleName}/>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" name='email' onChange={handleEmail} />

          </div>
          <div class="flex items-center justify-between">
          </div>
          <input  type="submit" value="Add" className='btn btn-3 justify-center' />
          
          
        </form>

      </div>
      
     
    </div>
  );
};

export default AddContact;