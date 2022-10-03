import React from 'react'
import { useState } from 'react';


export const Context = React.createContext();

export default function AdminUserContext({children}) {
    const [ user, setUser ] = useState(null);
    const [ islogged, setIslogged] = useState(false);

    const login = (email, password) => {
        setUser({
            name: "Zezinho da Silva",
            email,
            password,
        });
        setIslogged(true);
    };

    const logout = () => {
        setUser(null);
        setIslogged(false);
    };


  return (
    <Context.Provider value={{ user, islogged, logout, login}}>
        {children}
    </Context.Provider>
  );
}
