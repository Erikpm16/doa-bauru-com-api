import React, { useState } from "react";

export const Context = React.createContext();

export default function OngsContext({ children }) {
  const [ongs, setOngs] = useState([]);

  const list = () => {
    fetch("http://localhost:3000/static/ongs.json")
      .then((response) => response.json())
      .then(setOngs);
  };

  const get = async (id) => {
    const response = await fetch(`http://localhost:3000/static/ongs.json/${id}`);
    return response.json();
  };

  return <Context.Provider value={{ ongs, list, get }}>{children}</Context.Provider>; 


}
