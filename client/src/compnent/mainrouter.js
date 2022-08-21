import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Acceuil from '../pages/acceuil'
import Gestion from '../pages/gestion'
import Bib from '../pages/Bib'
import Signin from '../pages/Sign in'
import Welcome from '../pageSignIn/welcome'
import GestionMateriel from '../pageSignIn/GestionMateriel'
import Mission from '../pages/Mission'


export default function () {
  return (
<div>
    <Routes>
        <Route path='/' element={<Acceuil/> }/>
        <Route path='/Gestion' element={<Gestion/>}/>
        <Route path='/Espace' element={<Gestion/> }/>
        <Route path='/' element={<Acceuil/> }/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/Mission' element={<Mission/> }/>
        <Route path='/bib' element={<Bib/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/gestion' element={<GestionMateriel/>}/>
       
    </Routes>
 </div>
  )
}
