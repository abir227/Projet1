import React from 'react'
import { Link } from 'react-router-dom'
export default function navbar() {
  return (
    <div><nav>
    <div class="nav-wrapper blue darken-4">
      <Link to={'/'} class="brand-logo">AGIM</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to={'/'}>Sass</Link></li>
        <li><Link to={'/decouvrir'}>Découvrir</Link></li>
        <li><Link to={'/Espace'}>Espace d'échange</Link></li>
        <li><Link to={'/Gestion'}>Gestion du matériel</Link></li>
      </ul>
    </div>
  </nav></div>
  )
}
