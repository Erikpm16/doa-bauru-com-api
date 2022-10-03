import React, { useState } from "react";

export const Context = React.createContext();

export default function OngsContext({ children }) {
  const [ongs, setOngs] = useState([]);

  const list = () => {
    fetch("http://localhost:2000/clients")
      .then((response) => response.json())
      .then((json) => setOngs(json));
  };

  const get = async (id) => {
    const response = await fetch(`http://localhost:2000/clients/${id}`);
    return response.json();
  };

  const create = async (ongs) => {
    const response = await fetch(`http://localhost:2000/clients`, {
      method:"POST",
      body: JSON.stringify(ongs),
    });
    return response.json();
  }

  return <Context.Provider value={{ ongs, list, get, create }}>{children}</Context.Provider>; 


}
