import React from 'react'
import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Acceuil from '../pages/acceuil'
import Bib from '../pages/Bib'
import Signin from '../pages/Sign in'
import Welcome from '../pageSignIn/welcome'
import GestionMateriel from '../pageSignIn/GestionMateriel'
import Mission from '../pages/Mission'
import Doc1 from '../pages/doc1'
import Doc2 from '../pages/doc2'
import Doc3 from '../pages/doc3'
import Form from '../pages/form'
import Form2 from '../pages/form2'
import WelcomeSiege from '../pageSignIn/page sign in Siege/welcomeSiege'
import '../PrivateRoute'
import PrivateRoute from '../PrivateRoute'
import Communiquer from '../pageSignIn/communiquer'




export default function () {
  const [nom,setNom]=useState("");
  return (
<div>
    <Routes>
        <Route path='/' element={<Acceuil/> }/>  
        <Route path='/' element={<Acceuil/> }/>
        <Route path='/welcome' element={<PrivateRoute><Welcome nom={nom} setNom={setNom}/></PrivateRoute>}/>
        <Route path='/Mission' element={<Mission/> }/>
        <Route path='/bib' element={<Bib/>}/>
        <Route path='/Signin' element={<Signin nom={nom} setNom={setNom}/>}/>
        <Route path='/gestion' element={<PrivateRoute><GestionMateriel nom={nom} setNom={setNom}/></PrivateRoute>}/>
        <Route path='/doc1' element={<Doc1/>}/>
        <Route path='/doc2' element={<Doc2/>}/>
        <Route path='/doc3' element={<Doc3/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/form2' element={<Form2/>}/>
        <Route path='/communiquer' element={<PrivateRoute><Communiquer nom={nom} setNom={setNom}/></PrivateRoute>}/>
        <Route path='/welcomeSiege' element={<PrivateRoute><WelcomeSiege/></PrivateRoute>}/>
        
        {/* <Route path='/decouvrir' element={<Decouvrir/> }/> */}
       
        
        
        
        



       
    </Routes>
 </div>
  )
}
