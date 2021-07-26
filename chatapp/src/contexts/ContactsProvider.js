import React, {  useContext } from 'react';


const ContactsContext = React.createContext();

function create(id, name) {
  setContacts(prevContacts => {
    return [...prevContacts, {id, name}]
  })
}


export default function ContactsProvider({ children }) {

const [contacts, setContacts] = useLocalStorage('contacts', [])

  return (
    <ContactsContext.Provider value={{ contacts, createContext}}>
      {children}

    </ContactsContext.Provider>
  )
}