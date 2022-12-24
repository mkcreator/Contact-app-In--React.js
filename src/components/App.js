import React,{useState,useEffect } from 'react';
// import { uuid } from 'uuidv4';
// import { isUuid } from 'uuidv4';
import './App.css';
import ContactList from './ContactList' 
import Header from './Header';
import AddContact from './AddContact';

function App() {
  
  // console.log(uuid)
  const LOCAL_STORAGE_KEY ="contacts"
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact)=>{
    setContacts([...contacts, ...contact]);
  };
  // const removeContactList = (id)=>{
  //   const newContactlist = contacts.filter((contact)=>{
  //     return contact.id !== id;
  //   });
  //   setContacts(newContactlist);
  // }
  useEffect(()=>{
    const retrivaContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrivaContacts) setContacts(retrivaContacts);
  },[]); 
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
  
  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler ={addContactHandler}/>
      <ContactList contacts ={contacts}  />
    </div>
  );
}

export default App;
