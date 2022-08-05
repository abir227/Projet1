import React from 'react'
import Navbar from '../compnent/navbar'
import Agacc from '../compnent/assets/images/agacc.jpg'
import gauche from '../compnent/assets/images/gauche.png'
import droite from '../compnent/assets/images/droit.png'

import '../compnent/assets/css/Acceuil.css'

//import Card from '../compnent/card'

export default function acceuil() {
  return (
    <div class="all">
        <Navbar/>
        <h3 class="def">AGIM : ASSOCIATION GÉNÉRALE DES INSUFFISANTS MOTEURS</h3>
        <div class="tout">
        <h3><img src={gauche} alt ="guillemets gauche" width={20}/>  L'impuissance est l'incapacité de l'esprit , <br></br> pas du corps <img src={droite} alt ="guillemets droite" width={20} /></h3>
        <div class="image">
        <img src={Agacc} alt ="soura" width={900} style={{display:'block',
postion:'center',
top :' 50%',
left: '50%',
}} /> 
</div>
      <p class='apercu'>Aperçu général </p> 
      <p> La paralysie cérébrale est liée à une lésion du cerveau survenue dans la période anténatale ou périnatale (pendant la grossesse, l’accouchement ou lors des premiers mois de la vie). Elle touche un cerveau encore en maturation et entraîne un trouble moteur non évolutif (paralysie, troubles de la coordination du mouvement).
« Paralysie cérébrale » (PC) est une mauvaise traduction de l’anglais (cerebral palsy) qui signifie en fait : paralysie d’origine cérébrale : ce n’est pas le cerveau qui est paralysé, c’est la lésion cérébrale qui entraîne des paralysies… Le terme recouvre les anciennes appellations « IMC » (infirmité d’origine cérébrale), classiquement utilisée lorsque la lésion n’entraîne pas, outre les atteintes motrices, de « troubles associés » cognitifs significatifs, même s’il peut s’y associer des difficultés spécifiques des fonctions "supérieures" gênant les apprentissages, notamment scolaires. Quand une déficience mentale notable est associée, on parlait usuellement d’infirmité motrice d’origine cérébrale (IMOC). La paralysie cérébrale est une des causes possibles de polyhandicap</p>
       <div class="social">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
       <pre> <a href="https://fr-fr.facebook.com/agim.la.marsa555/" class="fa fa-facebook"></a> <a href="#" class="fa fa-twitter"></a> <a href="#" class="fa fa-google"></a> <a href="#" class="fa fa-youtube"></a> </pre> </div>
       </div>
        </div>
  )
}
