import React from 'react'
import Navibar from './components/Navibar'
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
        <Navibar />
        <Outlet />
    </div>
  )
}
