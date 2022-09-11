import React from 'react'
import Navbar from '../compnent/navbar'
import { Link } from 'react-router-dom'
import '../compnent/assets/css/bib.css'
export default function Bib() {
  return (
    <div className='all'>
        <Navbar/>
        <div className='contenu'>
          <h3> Bibliothèque Juridique</h3>
          <p> Vous trouvez ci-joint les regles et les lois qui concernent les individus qui souffrent d'une insuffisance moteur</p>
          <p ><Link to={'/doc1'} >Loi1</Link> <br></br> 
            <Link to={'/doc2'} >Loi2</Link><br></br> 
             <Link to={'/doc3'} >Loi3</Link>  </p>

        </div>
        </div>
  )
}