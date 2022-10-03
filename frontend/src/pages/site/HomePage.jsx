import React from 'react'
import Navibar from './components/Navibar'
import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import OngsContext from './context/OngsContext';
=======
>>>>>>> e56a93246b21811cad988040082e019ea8901612

export default function HomePage() {
  return (
    <div>
<<<<<<< HEAD
      <OngsContext>
=======
>>>>>>> e56a93246b21811cad988040082e019ea8901612
        <Navibar />
        <Outlet />
    </div>
  )
}
