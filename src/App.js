
import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import Header from './Components/Header';
import { v4 as uuid } from "uuid";

function App() {
  const [contacts, setContacts] = useState([]);
  const local_key="contacts";

  const addContact = (contact) => {
    
    setContacts([...contacts, { id: uuid(), ...contact }]);
  }

  const deleteContact=(id)=>{
      const newContactList=contacts.filter((contact)=>{
        return contact.id !== id;
      });
      setContacts(...newContactList)
      // console.log("helloooo",id)
  }
//getting from localStorage
   useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(local_key));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

//setting to localStorage
  // useEffect(() => {
  //   localStorage.setItem(local_key, JSON.stringify(contacts));
  // }, [contacts]);
 
  // const handleAddContact=()=>{
  //   localStorage.setItem(local_key,JSON.stringify(contacts))
  // }
 
  return (
    <div>

      <Header></Header>
      <AddContact addContact={addContact} setContacts={setContacts}></AddContact>
      <ContactList contacts={contacts} deleteContact={deleteContact} ></ContactList>
    </div>
  );
}

export default App;
