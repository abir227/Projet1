import React from 'react'

export default function GestionMateriel() {
  function data(){
    fetch('/materiaux').then(res=>res.json()).then(result=>{console.log(result)})
  }
  return (
    <div>GestionMateriel
      {data}
    </div>
  )
}