import React, { useEffect, useState } from 'react'
import'../compnent/assets/css/page.css'
import Navbar from '../pageSignIn/components/Navbar'
import Popup from './components/popup'

export default function GestionMateriel() {
 const [openModal,setOpenModal]=useState(false)
  const [mat_tab, setMat_tab] = useState([])
  useEffect(() => {
    fetch('/materiaux', { headers: { "Authorization": "Bearer" } }).then(res => res.json()).then(result => {
      setMat_tab(result.mats)
    })
  })

 
  function Delete(userID){
    
   fetch(`/deletemateriaux/${userID}`,{method:"delete",headers: { "Content-Type": "application/json" }}).then(res=>res.json).then(resultat=>{console.log(resultat)})
  }


  return (
    <>
      <Navbar/>
      <tr><th>Nom</th>
      <th>Telephone</th><th>Produit</th><th>lieu</th></tr>
      {
        mat_tab.map(item => {
          return <tr>
            <td id='tab'>{item.nom}</td>
            <td id='tab'>{item.telephone}</td>
            <td id='tab'>{item.produit}</td>
            <td id='tab'>{item.lieu}</td>
             

            <td id='tab'><i onClick={()=>{Delete(item._id)}} id='Dbtn' class="material-icons">delete_forever</i></td>
            </tr>
            

        })
      }

     <button className='Popbtn' onClick={()=>{setOpenModal(true)}}>Ajouter</button>
     <Popup open={openModal} Close={()=>setOpenModal(false)}/>
    


    </>
  )
}

