import React from 'react'
import Navbar from '../compnent/navbar'
import { Link } from 'react-router-dom'
import '../compnent/assets/css/bib.css'
export default function Bib() {
  return (
    <div className='all'>
        <Navbar/>
        <pre className='contenu'><Link to={'/doc1'} >Loi1</Link>  <Link to={'/doc2'} >Loi2</Link>  <Link to={'/doc3'} >Loi3</Link></pre>
        </div>
  )
}