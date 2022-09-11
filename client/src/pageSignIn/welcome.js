import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Navbar from '../pageSignIn/components/Navbar';
import '../compnent/assets/css/page.css'
export default function(props) {

  const navigate=useNavigate();
  function nav(){ 

    navigate('/gestion')
  }
  function nav2(){ 

    navigate('/communiquer')
  }
  return (
    <div>
      <Navbar/>
      <a class="waves-effect waves-light btn-large" id='button' onClick={nav}><i class="material-icons left">assignment</i>Gestion du Materiel </a>
      <a class="waves-effect waves-light btn-large" id='button2' onClick={nav2} ><i class="material-icons left">contact_mail</i>communiquer avec le siege</a>
     </div>
  )
}

