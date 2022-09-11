import React, { Component } from 'react'
import '../compnent/assets/css/form.css'
import M from 'materialize-css'

import Navbar from '../compnent/navbar'
export default class form extends Component {
 constructor(props){
    super(props);
    this.state ={
       nom:"",
       prenom:"",
       email:"",
       numtel:"" ,
       branche:""
    }
   // this.handleChangeNom = this.handleChangeNom.bind(this)
   // this.handleChangePrenom = this.handleChangePrenom.bind(this)
   // this.handleChangeEmail = this.handleChangeEmail.bind(this)
   // this.handleChangeNumtel = this.handleChangeNumtel.bind(this)
//this.handleSubmit= this.handleSubmit.bind(this)
}
 handleChangeNom=(event)=>{
    this.setState({nom :event.target.value})
 }
 handleChangePrenom=(event)=>{
    this.setState({prenom :event.target.value})
 }
 handleChangeEmail=(event)=>{
    this.setState({email :event.target.value})
 }
 handleChangeNumtel=(event)=>{
    this.setState({numtel :event.target.value})
 }
 handleChangeBranche=(event)=>{
    this.setState({branche :event.target.value})
 }

//  handleSubmit=(event)=>{
//     event.preventDefault();
//     console.log(
//         "Nom :", this.state.nom,
//         "Prenom :" ,this.state.prenom,
//        " Numtel :", this.state.numtel,
//         "Email :" ,this.state.email,
//         "Branche :",this.state.branche
//     );
    
//  }
 PostData=()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)){
        M.toast({html: "invalid email"})
        return
    }
    
    fetch("/form2",{
        method:"post",
        headers :{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(this.state)
    }).then(res=>res.json()).then(data=>{
        if(data.error){
            M.toast({html: data.error})
        }
        else{
            M.toast({html: data.message})
        }})
  }
 
    render() {
   
    return (
      <div>
<Navbar/>
{/* onSubmit={this.handleSubmit} */}
        <form > 
            <h2 className='h'>Rejoignez-nous </h2>
            <p className='para'>Pour devenir un de nos membres veuillez remplir ce formulaire ci-dessous </p>
            <div>
                <label htmlFor='nom'>
                    Nom :
                    <input type={'text'} value={this.state.nom} placeholder='nom' onChange={this.handleChangeNom}/>
                  
                </label>
            </div>
            <div>
                <label htmlFor='prenom'>
                    Prénom :
                    <input type={'text'} value={this.state.prenom} placeholder='prénom' onChange={this.handleChangePrenom}/>
                </label>
            </div>
            
            <div>
                <label htmlFor='email'>
                    Email :
                    <input type={'text'} value={this.state.email} placeholder='email' onChange={this.handleChangeEmail}/>
                </label>
            </div>
            <div>
                <label htmlFor='numtel'>
                    Numéro de téléphone :
                    <input type={'text'} value={this.state.numtel} placeholder='numtel' onChange={this.handleChangeNumtel}/>
                </label>
            </div>
            <div>
                <label htmlFor='branche'>
                    La branche que vous pouvez intégrer :
                    <input type={'text'} value={this.state.branche} placeholder='Branche' onChange={this.handleChangeBranche}/>
                </label>
            </div>

            <button className='but' onClick={this.PostData} >Submit</button>

        </form>
      </div>
    )
  }
}