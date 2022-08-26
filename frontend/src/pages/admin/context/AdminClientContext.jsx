import React from 'react'
import { useState } from 'react';

export const Context = React.createContext();

export default function AdminClientContext({children}) {
    const [clients, setClients] = useState([]);

    const create = (client) => {
        const data = [
            ...clients,
            client
        ];
        setClients(data)
    }

    const list = () => {
        fetch("http://localhost:2000/")
        .then((res) => res.json())
          .then((json) => setClients(json));
    }

  return (
    <Context.Provider value={{clients, create, list}}>
    {children}
</Context.Provider>
  )
}
