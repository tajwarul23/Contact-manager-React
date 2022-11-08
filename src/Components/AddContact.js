import React from 'react';

const AddContact = () => {
    return (
       <div className='grid place-items-center mt-5'>
         <div class=" max-w-xs mt-5  ">
  <form class="bg-white  rounded px-8 pt-6 pb-8 mt-8 border-zinc-700 border-solid border-2 ">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='name' type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" name='email'/>
      
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Add
      </button>
    
    </div>
  </form>
 
</div>
       </div>
    );
};

export default AddContact;