import React from 'react'
import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Context } from '../context/AdminUserContext'

export default function Menu() {
    const { user, logout } = useContext(Context)
  return (
    <>
    <Button as={Link} to="/" variant="outline-primary" className="my-3 w-100">
        Voltar
    </Button>
    <p>
    Olá {user.name}, {user.email}!{" "}
    <Button size="sm" onClick={() => logout()}>
      sair
    </Button>
  </p>
  </>
  )
}
