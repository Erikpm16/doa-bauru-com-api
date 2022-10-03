import React from 'react'
import Navibar from './components/Navibar'
import { Outlet } from "react-router-dom";
import OngsContext from './context/OngsContext';

export default function HomePage() {
  return (
    <div>
      <OngsContext>
        <Navibar />
        <Outlet />
        </OngsContext>
    </div>
  )
}
