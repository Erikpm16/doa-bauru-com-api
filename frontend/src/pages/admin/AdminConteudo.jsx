import React from 'react'
import { useContext } from 'react';
import { Context } from './context/AdminUserContext'
import Login from '../site/Login'

export default function AdminConteudo() {
    const { isLogged } = useContext(Context);

    if (!isLogged) {
        return (<Login />)
    }

  return (
    <div>AdminConteudo</div>
  )
}
