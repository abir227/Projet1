import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../compnent/navbar'
export default function() {
  const navigate=useNavigate();
  function nav(){ 

    navigate('/gestion')
  }
  return (
    <div>
      <Navbar/>
      <a class="waves-effect waves-light btn-large" onClick={nav}><i class="material-icons left">assignment</i>Gestion du Materiel </a>
     
     </div>
  )
}