import React, { useState } from "react";
import { api } from "../../../services/api";

export const Context = React.createContext();

export default function OngsContext({ children }) {
  const [ongs, setOngs] = useState([]);

  const list = async () => {
    const response = await api.get('/clients');
    setOngs(response.data);
  };

  const get = async (id) => {
    const response = await api.get(`/clients/${id}`);
    return response.data;
  };

  const create = async (ong) => {
    const response = await api.post(`/clients/`, ong);
    return response.data;
  }

  return <Context.Provider value={{ ongs, list, get, create }}>{children}</Context.Provider>; 


}
