import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../compnent/navbar'
import M from 'materialize-css'
import '../compnent/assets/css/page.css'
import Popup from '../compnent/popup'
export default function (props) {
  const [openModal, setOpenModal] = useState(false)


  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function postData() {

    fetch("/signin", {
      method: "post", headers: { "Content-Type": "application/json" }, body: JSON.stringify({
        password: password, nom: props.nom
      }
      )
    }).then(res => res.json()).then(data => {
      // localStorage.setItem("jwt",data.token)
      console.log(data)

      if (data === "saisir vos cordonnées") {

        M.toast({ html: "saisir vos cordonnées" })

      }
      else if (data.error) {
        M.toast({ html: "verfier vos cordonnées" })
      }
      else {
        localStorage.setItem("jwt", data.token)
        localStorage.setItem("bureau", JSON.stringify(data.bureau))
        M.toast({ html: "signed in" })
        // useEffect(()=>{navigate('/welcome')})
        navigate('/welcome', { replace: true })
        

      }
    }
    )
  }



  return (
    <div>
      <Navbar />
      <div class="row">
        <div class="col s12 m6">
          <div class="card" id='sign'>
            <div class="card-content white-text">
              <span class="card-title blue-text text-darken-2">connecter</span>
              <p>
                <input type={'text'} value={props.nom} placeholder="email" onChange={(e) => props.setNom(e.target.value)} />
                <input type={'password'} value={password} placeholder="mot de passe" onChange={(e) => setPassword(e.target.value)} />
              </p>
            </div>


            <button class="btn waves-effect waves-light  blue darken-4" onClick={postData} type="submit" name="action">connecter
              <i class="material-icons right" >send</i>
            </button>
            <br />
            <button id='conn' onClick={() => { setOpenModal(true) }}>Connecter en tant que le Siége</button>
            <Popup open={openModal} Close={() => setOpenModal(false)} />

          </div>

        </div>
      </div>
    </div>
  )
}