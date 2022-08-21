import React from 'react'
import agim2 from '../compnent/assets/images/agim2.png'
import { Link } from 'react-router-dom'
import './assets/css/App.css'
import Dropdown from '../compnent/dropdown'
import DropdownS from '../compnent/dropdownS'
export default function navbar() {
  return (
    <div><nav>
    <div class="nav-wrapper blue darken-4">
      <Link to={'/'} class="brand-logo"><img src={agim2} alt=" " width={74}/></Link> 
      {/* <Link to={'/'} class="brand-logo">AGIM</Link> */}
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Dropdown/>  </li>
        <li><pre>  </pre></li>
        <li><Link to={'/Gestion'}></Link></li>
        <li>  <DropdownS/>  </li>
        <li><Link to={'/Signin'}>Log in</Link></li>
        <li><Link to={'/Gestion'}></Link></li>
        <li><Link to={'/Gestion'}></Link></li>
         {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false" role="button">Découvrir</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Mission Vision et Valeurs</a>
              <a class="dropdown-item" href="#">Equipe</a>
              <a class="dropdown-item" href="#">Bibliothèque Juridique</a>
            </div>
          </li>  */}
        {/* <li>       
          <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

         <ul id='dropdown1' class='dropdown-content'>
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li> </ul> </li>  */}
         


        
      </ul>
    </div>
  </nav></div>
  )
}
