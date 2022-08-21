import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../compnent/navbar'
import M from 'materialize-css'
export default function () {

  const [nom,setNom]=useState("");
  const[password,setPassword]=useState("");
   const navigate=useNavigate();
  function postData(){ 
    fetch("/signin", {
      method: "post", headers: { "Content-Type": "application/json" }, body: JSON.stringify({
      password: password, nom: nom})
    }).then(res => res.json()).then(data => {
      if (data.error) {
        M.toast({ html: data.message })

      }
      else{
        M.toast({ html: "signed in" })
        navigate('/welcome')
      }
      console.log(data)
    }

    )
  }
          

  return (
    <div>
      <Navbar/>
      <div class="row">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-content white-text">
          <span class="card-title blue-text text-darken-2">connecter</span>
          <p>
            <input type={'text'} value={nom} placeholder="email" onChange={(e) => setNom(e.target.value)}/>
            <input type={'password'} value={password} placeholder="mot de passe" onChange={(e) => setPassword(e.target.value)}/>
          </p>
        </div>
        
        <div class="card-action">
        <button class="btn waves-effect waves-light  blue darken-4" onClick={postData} type="submit" name="action">connecter
    <i class="material-icons right" >send</i>
  </button>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}