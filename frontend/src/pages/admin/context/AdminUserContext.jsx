import React from 'react'
import { useContext } from 'react'

export const Context = React.creacteContext()

export default function AdminUserContext({children}) {
    const [ user, setUser ] = useContext(null);
    const [ islogged, setIslogged] = useContext(false);

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
