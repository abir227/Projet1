import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Acceuil from '../pages/acceuil'
import Bib from '../pages/Bib'
import Decouvrir from '../pages/Decouvrir'
import Gestion from '../pages/gestion'
export default function () {
  return (
<div>
    <Routes>
        <Route path='/' element={<Acceuil/> }/>
        <Route path='/Gestion' element={<Gestion/>}/>
        <Route path='/Espace' element={<Gestion/> }/>
        <Route path='/decouvrir' element={<Decouvrir/> }/>
        <Route path='/bib' element={<Bib/>}/>

       
    </Routes>
 </div>
  )
}
