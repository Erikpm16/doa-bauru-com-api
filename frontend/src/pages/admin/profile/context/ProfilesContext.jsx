import React, { useEffect, useState } from "react";

export const Context = React.createContext();

export default function ProductContext({ children }) {
  const [products, setProducts] = useState([]);


  const list = () => {
      fetch("http://localhost:2000/")
        .then((res) => res.json())
        .then((json) => setProducts(json));
  };
  

  const get = async (id) => {
    const response = await fetch(`http://localhost:2000/COLOCARCAMINHODOPROFILES/${id}`);
    return response.json();
  };

  
  useEffect(() => {
    list();
  }, []);

  return <Context.Provider value={{ products, list, get}}>{children}</Context.Provider>;
}