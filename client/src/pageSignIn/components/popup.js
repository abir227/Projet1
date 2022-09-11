import React, { useState } from 'react'
import M from 'materialize-css'
import '../../compnent/assets/css/popup.css'
export default function Popup({ open,Close }) {
const[nom,setNom]=useState('')
const[telephone,setTelephone]=useState('')
const[produit,setProduit]=useState('')
const[lieu,setLieu]=useState('')
function add() {
    fetch("/signup", {
        method: "post", headers: { "Content-Type": "application/json" }, body: JSON.stringify({
            telephone: telephone, produit: produit, lieu: lieu, nom: nom
        }
        )
    }).then(res => res.json()).then(resultat => {
        console.log(resultat)
        if (resultat === "please add all the fields") {
            M.toast({ html: "please add all the fields" })
        }
        else if (resultat === 'saved') {
            M.toast({ html: 'sauvegardé' })
        }

    })
}
    if (!open) {
        return null
    }
    return (
        <div className='overlay'>
            <div className='modalContainer'>
                <div className='modalRight'>
                    <p className='closeBtn' onClick={Close}>X</p>
                    <div className='Content'> <p>
                    <input type={'text'} value={nom} placeholder="nom" onChange={(e) => setNom(e.target.value)} />
                            <input type={'number'} value={telephone} placeholder="numero du tel" onChange={(e) => setTelephone(e.target.value)} />
                            <input type={'text'} value={produit} placeholder="produit" onChange={(e) => setProduit(e.target.value)} />
                            <input type={'text'} value={lieu} placeholder="lieu" onChange={(e) => setLieu(e.target.value)} />
                    </p>
                    <button className='bold' onClick={add}>Ajouter</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

