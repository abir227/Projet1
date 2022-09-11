import React from 'react'
import Navbar from '../compnent/navbar'
import miss from '../compnent/assets/images/miss.png'
import equipe from '../compnent/assets/images/Equipe.jpg'
import '../compnent/assets/css/mission.css'
import { useNavigate } from 'react-router-dom'
// import '../App.css'
export default function Decouvrir() {
  const navigate = useNavigate()
  function nav(){
    navigate('/bib')
  }
  return (
    <div class="all">
      <Navbar />
      <div class="row " >
        <div class="col s12 m6">
          <div class="card z-depth-4" >
            <div class="card-image" className="all">
              <img className='image' src={equipe} width={'40'}/>
              <span class="card-title ">About us</span>
            </div>
            <div class="card-content">
              <p>
                L'Association Générale des Insuffisants Moteurs (AGIM) est une ONG qui a été créée le 1er Août 1973 conformément à la loi 59-154 du 7 novembre 1959 sur les associations, et a obtenu son visa sous le no 4126 du 1-08-1973.
                L'AGIM est l'une des plus grandes associations de personnes handicapées en Tunisie.
                Elle a été reconnue d'Intérêt National par décret 77-145 du 9 Février 1977.</p>
            </div>
          </div>
        </div>



        <div class="col s12 m6">
          <div class="card z-depth-4" >
            <div class="card-image" className="all">
              <img className='image' src={miss} />
              <span class="card-title">notre Mission</span>
            </div>
            <div class="card-content">
              <p>AGIM a pour mission d’améliorer la vie des personnes ayant des insufisances moteur en finançant 
                adéquatement la recherche d’un traitement curatif,
                 en fournissant des services et en assurant un soutien constant.</p>
            </div>
          </div>
        </div>



      </div>
      <button class="btn waves-effect waves-light" type="submit" onClick={nav} name="action">Notre Bibliothéque juridique 
    <i class="material-icons right">send</i>
  </button>
    </div>
  )
}